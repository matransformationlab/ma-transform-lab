import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'app.db')
export const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS assessments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    answers TEXT NOT NULL,
    score INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

export function saveAssessment(answers: Record<number, number>, score: number): number {
  const stmt = db.prepare('INSERT INTO assessments (answers, score) VALUES (?, ?)')
  const result = stmt.run(JSON.stringify(answers), score)
  return result.lastInsertRowid as number
}

export function addSubscriber(email: string, name: string): number {
  const stmt = db.prepare('INSERT INTO subscribers (email, name) VALUES (?, ?)')
  const result = stmt.run(email, name)
  return result.lastInsertRowid as number
}

export function getSubscriberCount(): number {
  const stmt = db.prepare('SELECT COUNT(*) as count FROM subscribers')
  return (stmt.get() as { count: number }).count
}

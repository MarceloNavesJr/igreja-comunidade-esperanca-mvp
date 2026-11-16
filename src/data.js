export const KEY = 'comunidade-esperanca-v1';
export const initialData = { volunteers: [], events: [], tasks: [] };
export function loadData(storage = localStorage) {
  try { const value = JSON.parse(storage.getItem(KEY)); return value && Array.isArray(value.volunteers) && Array.isArray(value.events) && Array.isArray(value.tasks) ? value : structuredClone(initialData); }
  catch { return structuredClone(initialData); }
}
export function saveData(data, storage = localStorage) { storage.setItem(KEY, JSON.stringify(data)); }
export function createItem(kind, values, id = crypto.randomUUID()) {
  if (!['volunteers','events','tasks'].includes(kind)) throw new Error('Tipo inválido');
  const name = String(values.name ?? '').trim();
  if (!name) throw new Error('Nome obrigatório');
  return { id, ...values, name };
}
export function addItem(data, kind, item) { return { ...data, [kind]: [...data[kind], item] }; }
export function removeItem(data, kind, id) { return { ...data, [kind]: data[kind].filter(item => item.id !== id) }; }
export function setTaskDone(data, id, done) { return { ...data, tasks: data.tasks.map(task => task.id === id ? { ...task, done: Boolean(done) } : task) }; }

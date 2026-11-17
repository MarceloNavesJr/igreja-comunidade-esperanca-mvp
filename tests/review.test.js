import { describe, it, expect } from 'vitest';
import { initialData, createItem, addItem, removeItem, setTaskDone } from '../src/data.js';

describe('Revisão de qualidade do MVP', () => {
  it('mantém o estado original ao adicionar um voluntário', () => {
    const novo = createItem('volunteers', { name: 'Maria' }, 'v1');
    const atualizado = addItem(initialData, 'volunteers', novo);
    expect(initialData.volunteers).toHaveLength(0);
    expect(atualizado.volunteers).toHaveLength(1);
  });

  it('remove somente a tarefa selecionada', () => {
    const primeira = createItem('tasks', { name: 'Organizar alimentos' }, 't1');
    const segunda = createItem('tasks', { name: 'Separar caixas' }, 't2');
    const comTarefas = addItem(addItem(initialData, 'tasks', primeira), 'tasks', segunda);
    const resultado = removeItem(comTarefas, 'tasks', 't1');
    expect(resultado.tasks.map(tarefa => tarefa.id)).toEqual(['t2']);
  });

  it('permite reabrir uma tarefa concluída sem alterar as demais', () => {
    const primeira = createItem('tasks', { name: 'Receber doações', done: true }, 't1');
    const segunda = createItem('tasks', { name: 'Conferir itens', done: false }, 't2');
    const dados = addItem(addItem(initialData, 'tasks', primeira), 'tasks', segunda);
    const resultado = setTaskDone(dados, 't1', false);
    expect(resultado.tasks.map(tarefa => tarefa.done)).toEqual([false, false]);
    expect(dados.tasks[0].done).toBe(true);
  });
});

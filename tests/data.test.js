import { describe,it,expect } from 'vitest';
import { createItem, addItem, removeItem, setTaskDone, loadData, saveData, initialData } from '../src/data.js';
describe('MVP Comunidade Esperança',()=>{
 it('cadastra voluntário',()=>{ const item=createItem('volunteers',{name:' Ana '},'1');expect(item.name).toBe('Ana');expect(addItem(initialData,'volunteers',item).volunteers).toHaveLength(1); });
 it('não aceita nome vazio',()=>{expect(()=>createItem('events',{name:'   '})).toThrow('Nome obrigatório');});
 it('exclui evento',()=>{const data=addItem(initialData,'events',createItem('events',{name:'Campanha'},'1'));expect(removeItem(data,'events','1').events).toHaveLength(0);});
 it('conclui tarefa',()=>{const data=addItem(initialData,'tasks',createItem('tasks',{name:'Separar doações',done:false},'1'));expect(setTaskDone(data,'1',true).tasks[0].done).toBe(true);});
 it('salva e recupera dados',()=>{const store=new Map();const storage={getItem:key=>store.get(key),setItem:(key,value)=>store.set(key,value)};saveData(initialData,storage);expect(loadData(storage)).toEqual(initialData);});
 it('ignora dados locais inválidos',()=>{const storage={getItem:()=>'{invalido'};expect(loadData(storage)).toEqual(initialData);});
});

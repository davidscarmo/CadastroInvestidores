import Knex from 'knex'; 

export async function up(knex: Knex)
{
    return knex.schema.createTable('investidores', table => 
    {
        table.increments('codigo').primary(); 
        table.string('nome').notNullable(); 
        table.decimal('capital').notNullable(); 
        table.string('prazo').notNullable(); 
        table.string('toleranciaRisco').notNullable();

    })
}

export async function down(knex: Knex) 
{
    return knex.schema.dropTable('investidores');
};
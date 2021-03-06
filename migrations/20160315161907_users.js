exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
      table.string('password');
      table.string('passwordResetToken');
      table.dateTime('passwordResetExpires');
      table.string('gender');
      table.string('location');
      table.string('picture');
      table.string('facebook');
      table.string('twitter');
      table.string('google');
      table.string('vk');
      table.dateTime('birthDate');
      table.integer('prioridade1');
      table.integer('prioridade2');
      table.integer('prioridade3');
      table.boolean('ehVereador');
      table.timestamps();
    }),
    knex.schema.createTable('vereadores', function (table) {
      table.integer('userId').primary().unsigned().references('id').inTable('users');
      table.integer('codigoJusticaEleitoral');
      table.string('partido');
      table.integer('numero');
      table.string('descricao');
      table.timestamps();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('vereadores')
  ]);
};

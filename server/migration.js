const [seedUsers, seedBodegas, seedProductos, seedHistoriales, seedInventarios] = require('./seeders');

const migration = async () => {
  await seedUsers();
  await seedBodegas();
  await seedProductos();
  await seedHistoriales();
  await seedInventarios();
};

module.exports = migration;

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create!([
    { name: 'Product 001' },
    { name: 'Product 002' },
    { name: 'Product 003' },
    { name: 'Product 004' }
  ])
  Customer.create!([
    { name: 'Customer 001' },
    { name: 'Customer 002' },
    { name: 'Customer 003' },
    { name: 'Customer 004' }
  ])
  Order.create!([
    { reference: 'ORD001' },
    { reference: 'ORD002' },
    { reference: 'ORD003' },
    { reference: 'ORD004' },
    { reference: 'ORD005' }
  ])
  
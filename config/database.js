// const path = require("path");
// const parse = require("pg-connection-string").parse;

// module.exports = ({ env }) => {
//   if (env("NODE_ENV") === "production") {
//     // const config = parse(process.env.DATABASE_URL);
//     // return {
//     //   defaultConnection: "default",
//     //   connection: {
//     //     default: {
//     //       connector: "bookshelf",
//     //       settings: {
//     //         client: "postgres",
//     //         host: config.host, 
//     //         port: config.port,
//     //         database: config.database,
//     //         username: config.user,
//     //         password: config.password,
//     //       },
//     //       options: {
//     //         ssl: false,
//     //       },
//     //     },
//     //   },
//     // };

//     return {
//       connection: {
//             client: 'mysql',
//             connection: {
//               host: env('DATABASE_HOST', 'localhost'),
//               port: env.int('DATABASE_PORT', 8889),
//               database: env('DATABASE_NAME', 'strapi'),
//               user: env('DATABASE_USERNAME', 'root'),
//               password: env('DATABASE_PASSWORD', 'root'),
//               ssl: {
//                 rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//               },
//             },
//             debug: false,
//           },
//     }
//   }
//   return {
//     connection: {
//       client: "sqlite",
//       connection: {
//         filename: path.join(
//           __dirname,
//           "..",
//           env("DATABASE_FILENAME", ".tmp/data.db")
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };
// };
module.exports = ({ env }) => (
  {
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 8889),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'root'),
      ssl: false,
    },
    debug: false,
  },
});

 

 
/**************************************************************
//
//  DefaultQueries.js
//  Region Metric
//
//  Created by Gabriel Araujo on 20/12/2022.
//
**************************************************************/


// const platformQuantity = {
//   description: null,
//   archived: false,
//   collection_position: null,
//   table_id: 5,
//   result_metadata: [
//     {
//       semantic_type: null,
//       coercion_strategy: null,
//       name: "platform",
//       field_ref: ["field", 42, null],
//       effective_type: "type/Text",
//       id: 42,
//       display_name: "Platform",
//       fingerprint: {
//         global: { "distinct-count": 2, "nil%": 0 },
//         type: {
//           "type/Text": {
//             "percent-json": 0,
//             "percent-url": 0,
//             "percent-email": 0,
//             "percent-state": 0,
//             "average-length": 10,
//           },
//         },
//       },
//       base_type: "type/Text",
//     },
//     {
//       name: "count",
//       display_name: "Count",
//       base_type: "type/BigInteger",
//       semantic_type: "type/Quantity",
//       field_ref: ["aggregation", 0],
//       fingerprint: {
//         global: { "distinct-count": 2, "nil%": 0 },
//         type: {
//           "type/Number": {
//             min: 1,
//             q1: 1,
//             q3: 2,
//             max: 2,
//             sd: 0.7071067811865476,
//             avg: 1.5,
//           },
//         },
//       },
//     },
//   ],
//   creator: {
//     email: "engineer@route.com",
//     first_name: "Route Engineer",
//     last_login: "2021-04-30T20:55:41.853",
//     is_qbnewb: true,
//     is_superuser: true,
//     id: 1,
//     last_name: "Test",
//     date_joined: "2021-04-30T20:54:55.364",
//     common_name: "Route Engineer Test",
//   },
//   can_write: true,
//   database_id: 2,
//   enable_embedding: false,
//   collection_id: null,
//   query_type: "query",
//   name: "Errors Quantity by Platform",
//   dashboard_count: 0,
//   creator_id: 1,
//   updated_at: "2021-04-30T23:16:55.121",
//   made_public_by_id: null,
//   embedding_params: null,
//   cache_ttl: null,
//   dataset_query: {
//     database: 2,
//     query: {
//       "source-table": 5,
//       aggregation: [["count"]],
//       breakout: [["field", 42, null]],
//     },
//     type: "query",
//   },
//   id: 1,
//   display: "table",
//   visualization_settings: {
//     "table.pivot_column": "platform",
//     "table.cell_column": "count",
//   },
//   collection: null,
//   created_at: "2021-04-30T23:16:55.121",
//   public_uuid: null,
// };

// const shopifyMerchantQuantity = {
//   description:
//     "Shopify - This card shows the most impacted merchants by errors.",
//   archived: false,
//   collection_position: null,
//   table_id: 5,
//   result_metadata: [
//     {
//       semantic_type: null,
//       coercion_strategy: null,
//       name: "header.X-Shopify-Shop-Domain",
//       field_ref: ["field", 284, null],
//       effective_type: "type/Text",
//       id: 284,
//       display_name: "X Shop If Y Shop Domain",
//       fingerprint: {
//         global: { "distinct-count": 2, "nil%": 0.5 },
//         type: {
//           "type/Text": {
//             "percent-json": 0,
//             "percent-url": 0,
//             "percent-email": 0,
//             "percent-state": 0,
//             "average-length": 11,
//           },
//         },
//       },
//       base_type: "type/Text",
//     },
//     {
//       name: "count",
//       display_name: "Count",
//       base_type: "type/BigInteger",
//       semantic_type: "type/Quantity",
//       field_ref: ["aggregation", 0],
//       fingerprint: {
//         global: { "distinct-count": 2, "nil%": 0 },
//         type: {
//           "type/Number": {
//             min: 1,
//             q1: 1,
//             q3: 2,
//             max: 2,
//             sd: 0.7071067811865476,
//             avg: 1.5,
//           },
//         },
//       },
//     },
//   ],
//   creator: {
//     email: "engineer@route.com",
//     first_name: "Route App",
//     last_login: "2021-05-03T18:07:10.836",
//     is_qbnewb: true,
//     is_superuser: true,
//     id: 1,
//     last_name: "Engineer",
//     date_joined: "2021-05-03T18:02:59.934",
//     common_name: "Route App Engineer",
//   },
//   can_write: true,
//   database_id: 2,
//   enable_embedding: false,
//   collection_id: null,
//   query_type: "query",
//   name: "Shopify - Most impacted merchant",
//   dashboard_count: 0,
//   creator_id: 1,
//   updated_at: "2021-05-03T18:24:21.137",
//   made_public_by_id: null,
//   embedding_params: null,
//   cache_ttl: null,
//   dataset_query: {
//     type: "query",
//     query: {
//       "source-table": 5,
//       aggregation: [["count"]],
//       breakout: [["field", 284, null]],
//     },
//     database: 2,
//   },
//   id: 3,
//   display: "table",
//   visualization_settings: {
//     "table.pivot_column": "header.X-Shopify-Shop-Domain",
//     "table.cell_column": "count",
//   },
//   collection: null,
//   created_at: "2021-05-03T18:24:21.137",
//   public_uuid: null,
// };

// const shopifyEndpointsQuantity = {
//   description:
//     "Shopify - This card shows the most impacted URLs by errors that end up in DLQ.",
//   archived: false,
//   collection_position: null,
//   table_id: 5,
//   result_metadata: [
//     {
//       semantic_type: null,
//       coercion_strategy: null,
//       name: "header.X-Shopify-Topic",
//       field_ref: ["field", 278, null],
//       effective_type: "type/Text",
//       id: 278,
//       display_name: "X Shop If Y Topic",
//       fingerprint: {
//         global: { "distinct-count": 2, "nil%": 0.5 },
//         type: {
//           "type/Text": {
//             "percent-json": 0,
//             "percent-url": 0,
//             "percent-email": 0,
//             "percent-state": 0,
//             "average-length": 7,
//           },
//         },
//       },
//       base_type: "type/Text",
//     },
//     {
//       name: "count",
//       display_name: "Count",
//       base_type: "type/BigInteger",
//       semantic_type: "type/Quantity",
//       field_ref: ["aggregation", 0],
//       fingerprint: {
//         global: { "distinct-count": 2, "nil%": 0 },
//         type: {
//           "type/Number": {
//             min: 1,
//             q1: 1,
//             q3: 2,
//             max: 2,
//             sd: 0.7071067811865476,
//             avg: 1.5,
//           },
//         },
//       },
//     },
//   ],
//   creator: {
//     email: "engineer@route.com",
//     first_name: "Route App",
//     last_login: "2021-05-03T18:07:10.836",
//     is_qbnewb: false,
//     is_superuser: true,
//     id: 1,
//     last_name: "Engineer",
//     date_joined: "2021-05-03T18:02:59.934",
//     common_name: "Route App Engineer",
//   },
//   can_write: true,
//   database_id: 2,
//   enable_embedding: false,
//   collection_id: null,
//   query_type: "query",
//   name: "Shopify - Most impacted URLs",
//   dashboard_count: 0,
//   creator_id: 1,
//   updated_at: "2021-05-03T18:27:57.322",
//   made_public_by_id: null,
//   embedding_params: null,
//   cache_ttl: null,
//   dataset_query: {
//     type: "query",
//     query: {
//       "source-table": 5,
//       aggregation: [["count"]],
//       breakout: [["field", 278, null]],
//     },
//     database: 2,
//   },
//   id: 4,
//   display: "table",
//   visualization_settings: {
//     "table.pivot_column": "header.X-Shopify-Topic",
//     "table.cell_column": "count",
//   },
//   collection: null,
//   created_at: "2021-05-03T18:27:57.322",
//   public_uuid: null,
// };

// const bigCommerceMerchantQuantity = {
//   description:
//     "Bigcommerce - This card shows the most impacted stores by errors.",
//   archived: false,
//   collection_position: null,
//   table_id: 5,
//   result_metadata: [
//     {
//       semantic_type: null,
//       coercion_strategy: null,
//       name: "body.store_id",
//       field_ref: ["field", 84, null],
//       effective_type: "type/Text",
//       id: 84,
//       display_name: "Store ID",
//       fingerprint: {
//         global: { "distinct-count": 344, "nil%": 0.002906976744186047 },
//         type: {
//           "type/Text": {
//             "percent-json": 0,
//             "percent-url": 0,
//             "percent-email": 0,
//             "percent-state": 0,
//             "average-length": 8.203488372093023,
//           },
//         },
//       },
//       base_type: "type/Text",
//     },
//     {
//       name: "count",
//       display_name: "Count",
//       base_type: "type/BigInteger",
//       semantic_type: "type/Quantity",
//       field_ref: ["aggregation", 0],
//       fingerprint: {
//         global: { "distinct-count": 136, "nil%": 0 },
//         type: {
//           "type/Number": {
//             min: 1,
//             q1: 6.410854307927458,
//             q3: 81.5,
//             max: 46514,
//             sd: 2620.355662069335,
//             avg: 306.6220930232558,
//           },
//         },
//       },
//     },
//   ],
//   creator: {
//     email: "engineer@route.com",
//     first_name: "Route Engineer",
//     last_login: "2021-05-03T21:38:05.652",
//     is_qbnewb: false,
//     is_superuser: true,
//     id: 1,
//     last_name: "Engineer",
//     date_joined: "2021-05-03T21:37:16.974",
//     common_name: "Route Engineer Engineer",
//   },
//   can_write: true,
//   database_id: 2,
//   enable_embedding: false,
//   collection_id: null,
//   query_type: "query",
//   name: "Bigcommerce - Most impacted stores",
//   dashboard_count: 0,
//   creator_id: 1,
//   updated_at: "2021-05-03T21:45:18.396",
//   made_public_by_id: null,
//   embedding_params: null,
//   cache_ttl: null,
//   dataset_query: {
//     type: "query",
//     query: {
//       "source-table": 5,
//       aggregation: [["count"]],
//       breakout: [["field", 84, null]],
//     },
//     database: 2,
//   },
//   id: 5,
//   display: "table",
//   visualization_settings: {
//     "table.pivot_column": "body.store_id",
//     "table.cell_column": "count",
//   },
//   collection: null,
//   created_at: "2021-05-03T21:45:18.396",
//   public_uuid: null,
// };

// module.exports = {
//   defaultQueries: function () {
//     return [
//       platformQuantity,
//       shopifyMerchantQuantity,
//       shopifyEndpointsQuantity,
//       bigCommerceMerchantQuantity,
//     ];
//   },
// };

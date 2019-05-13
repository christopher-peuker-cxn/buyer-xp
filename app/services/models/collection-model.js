// models/collections-model.js



// --------------- MOCK DATA ---------------- //
const products_mock_data = [
  {collectionId: 1, data: [{name: 'product_1_for_collection_1', id: 11}, {name: 'product_1_for_collection_1', id: 12}]},
  {collectionId: 2, data: [{name: 'product_1_for_collection_2', id: 13}, {name: 'product_2_for_collection_2', id: 14}]},
  {collectionId: 3, data: [{name: 'product_1_for_collection_3', id: 15}, {name: 'product_2_for_collection_3', id: 16}]},
]
const looks_mock_data = [
  {collectionId: 1, data: [{name: 'look_1_for_collection_1', id: 11}, {name: 'look_1_for_collection_1', id: 12}]},
  {collectionId: 2, data: [{name: 'look_1_for_collection_2', id: 13}, {name: 'look_2_for_collection_2', id: 14}]},
  {collectionId: 3, data: [{name: 'look_1_for_collection_3', id: 15}, {name: 'look_2_for_collection_3', id: 16}]},
]
const collections_mock_data = [
  {
    designer: 'DESIGNER NAME A',
    collectionName: 'NUDE',
    season: 'SS\'19',
    link: '/test1',
    primaryImageUrl: '/static/slide_01.jpg',
    id: 1,
    themeBlack: false,
  },
  {
    designer: 'DESIGNER NAME B',
    collectionName: 'THE REAL PANTS',
    season: 'SS\'19',
    link: '/test2',
    primaryImageUrl: '/static/slide_02.jpg',
    id: 2,
    themeBlack: true,
  },
  {
    designer: 'DESIGNER NAME C',
    collectionName: 'FABRIK',
    season: 'SS\'19',
    link: '/test3',
    primaryImageUrl: '/static/slide_03.jpg',
    id: 3,
    themeBlack: false,
  },
  {
    designer: 'DESIGNER NAME D',
    collectionName: 'SUMMER DRESSES',
    season: 'SS\'19',
    link: '/test4',
    primaryImageUrl: '/static/slide_04.jpg',
    id: 4,
    themeBlack: false,
  }
]

// --------------- above can be deleted when using apis ---------------- //



// Instantiate a new object.
const Collection = {};

// Define methods for the Collections object

// Returns all Collections from the api
Collection.get_all = () => {

  // --------------- this will be an api call ---------------- //
  const collections = collections_mock_data
  // --------------- above can be deleted when using apis ---------------- //

  return new Promise((resolve) => {
    resolve({title: 'Collection Landing Page', collections});
  });
};

// Return one Collection by collection id
Collection.get_by_id = id => {
  // ---------------- this will be an api call ---------------- //
  const collection = collections_mock_data.find((collection) => collection.id == id);
  // --------------- above can be deleted when using apis ---------------- //
  return new Promise((resolve) => {
    if (collection) {
      resolve({title: 'Collection Detail', collection});
    } else {
      reject({statusCode: 404})
    }
  });
};

// Return all Products for one Collection by collection id
Collection.get_products = id => {
  // ---------------- this will be an api call ---------------- //
  const collection_data = collections_mock_data.find((collection) => collection.id == id);
  const products_data = products_mock_data.find((product) => product.collectionId == id);

  const collection = {
    ...collection_data,
    products: products_data ? products_data.data : []
  }
  // --------------- above can be deleted when using apis ---------------- //

  return new Promise((resolve) => {
    resolve({title: 'All Collection Products', collection});
  });
};

// Return all Looks for one Collection by collection id
Collection.get_looks = id => {
  // ---------------- this will be an api call ---------------- //
  const collection_data = collections_mock_data.find((collection) => collection.id == id);
  const looks_data = looks_mock_data.find((product) => product.collectionId == id);

  const collection = {
    ...collection_data,
    looks: looks_data ? looks_data.data : []
  }
  // --------------- above can be deleted when using apis ---------------- //

  return new Promise((resolve) => {
    resolve({title: 'All Collection Looks', collection});
  });
};

// Export the Collections object
module.exports = Collection;
import Axios from "axios";

export const getByCategory = (category) => {
  return Axios.get(
    `http://localhost:8000/product/category?category=${category}&page=1&limit=7`,
  );
};
export const getMoreProduct = (category,page) => {
    return Axios.get(`http://localhost:8000/product/category?category=${category}&page=${page}&limit=7`)
}

export const getNewProduct = () => {
  return Axios.get("http://localhost:8000/product/new?page=1&limit=20");
};

export const getMoreNewProduct = (page) => {
    return Axios.get(`http://localhost:8000/product/new?page=${page}&limit=6`)
}

export const getProductDetail = (id) => {
  return Axios.get(`http://localhost:8000/product/detail?id=${id}`);
};
export const getPopular = () => {
  return Axios.get("http://localhost:8000/product/popular?page=1&limit=20");
};

export const searchProduct = (name, filter) => {
  return Axios.get(`http://localhost:8000/product?search=${name}&filter=${filter}&page=1&limit=15`);
};

export const searchMoreProduct = (name,filter, page) => {
  return Axios.get(`http://localhost:8000/product?search=${name}&filter=${filter}&page=${page}&limit=15`);
};


export const doTransaction = (
  invoice,
  seller_id,
  customer_id,
  address,
  amount,
  payment,
  product,
) => {
    const data = {
        invoice: invoice,
        seller_id: seller_id,
        customer_id: customer_id,
        address: address,
        amount: amount,
        payment: payment,
        product: product,
    }
    return Axios.post('http://localhost:8000/transaction', data)
};

export const addNewAddress = (user_id, save_address, receipt_name, telephone_number, address, postal_code, city_or_subdistric) => {
    return Axios.post('http://localhost:8000/addAddress', {user_id:user_id, save_address:save_address, receipt_name:receipt_name, telephone_number:telephone_number, address:address, postal_code:postal_code, city_or_subdistric:city_or_subdistric })
}

export const getAddress = (id) => {
    return Axios.get(`http://localhost:8000/Address?user_id=${id}`)
}


export const getHistorySeller = (id) => {
    return Axios.get(`http://localhost:8000/history/seller?id=${id}`)
}

export const getHistoryCustomer = (id) => {
    return Axios.get(`http://localhost:8000/history/customer?id=${id}`)
}


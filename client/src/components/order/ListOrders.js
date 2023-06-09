import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { myOrders, clearErrors } from '../../actions/orderActions'

import { ImEye } from "react-icons/im";

const ListOrders = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector( state => state.myOrders );

  useEffect(() => {
    dispatch(myOrders());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const setOrders= () => {
    const data = {
      columns: [
        {
          label: 'Order ID',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Num of Seats',
          field: 'numOfItems',
          sort: 'asc'
        },
         {
          label: 'Amount',
          field: 'amount',
          sort: 'asc'
        },
         {
          label: 'Status',
          field: 'status',
          sort: 'asc'
        },
         {
          label: 'Actions',
          field: 'actions',
          sort: 'asc'
        },
      ],
      rows: []
    }

    orders.forEach(order => {
      data.rows.push({
        id: order._id,
        numOfItems: order.orderItems.length,
        amount: `${order.totalPrice}`,
        status: order.orderStatus && String(order.orderStatus)
        .includes('Confirmed') 
        ? <p style={{ color: 'green' }}>{order.orderStatus}</p> 
        : <p style={{ color: 'red' }}>{order.orderStatus}</p>,
        actions:
          <Link 
          to={`/order/${order._id}`} 
          className="btn btn-primary d-inline-flex align-items-center" >
            <ImEye className="mr-1" /> View Details
          </Link>
      })
    })

    return data;
  }

  return (
    <>
      <MetaData title={'My Orders'} />

      <h1 className="my-5">My Orders</h1>

      {loading ? <Loader /> : (
        <MDBDataTable 
          data={setOrders()}
          className="px-3"
          bordered
          striped
          noBottomColumns
          sortable
          hover
        />
      )}
    </>
  )
}

export default ListOrders

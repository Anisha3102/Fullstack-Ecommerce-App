import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/AuthProvider";
import OrderTable from "../../components/OrderTable.jsx";

function AdminOrders() {
  const status = [
    "Not processed",
    "processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ];

  const [orders, setOrders] = useState([]);

  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/admin-orders");

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    if (auth?.user) {
      getOrders();
    }
  }, [auth?.user]);

  return (
    <>
      <Layout title={"Orders"}>
        <div className="flex">
          <AdminMenu />
          <div className="p-5 w-4/5">
            <h1 className="text-3xl font-semibold">All orders</h1>
            <div className="w-full mt-5">
              <OrderTable orders={orders} admin={true} status={status} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminOrders;

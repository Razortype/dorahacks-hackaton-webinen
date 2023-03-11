import React, { FC } from "react";
import { Button, Modal, Image, Row, Col, Table } from "react-bootstrap";
import WalletConnection from "../../services/wallet-connection";
import "./HomepageEventModal.css";
import { jettonDeployController } from "../../lib/deploy-controller";
import useConnectionStore from "../../store/connection-store/useConnectionStore";
import WalletConnector from "../walletConnector/WalletConnector";
import { toast } from "react-toastify";


interface HomepageEventModalProps {
  id: number;
  name: string;
  event_image: string;
  description: string;
  capacity: number;
  location: string;
  creater_wallet_address: string;
  contract_address: string;
  ticket_price: number;
  duration: number;
  date: Date;
  created_at: Date;
  updated_at: Date;
  show: any;
  handleClose: any;
}

const HomepageEventModal: FC<HomepageEventModalProps> = ({
  id,
  name,
  event_image,
  description,
  capacity,
  location,
  creater_wallet_address,
  contract_address,
  ticket_price,
  duration,
  date,
  created_at,
  updated_at,
  show,
  handleClose,
}) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const { address } = useConnectionStore();
  console.log(address);

  const handleGetTicket = async () => {
    try {
      setIsLoading(true);
      toast.info('Request Sent!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      const connection = WalletConnection.getConnection();
      let tx = await jettonDeployController.transferTon(connection, "EQATwsrbvkc0HTGU-u7v9SQO8B671e7MTiAbgcEa10zX3UpU", 0.05);
      console.log(tx);
      console.log("succcesfful");
      toast.success('Jeton successfully purchased!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      handleClose();
    } catch (e) {
      toast.error('Error Occured!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    setIsLoading(false);
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
      //animationed
      animation={true}
      size="lg"
      fullscreen="sm-down"
      dialogClassName="modal-50w"
      //background of modal dark
      className=""
    >
      <Modal.Body className="bg-dark rounded-top">
        <Image
          src={event_image}
          fluid
          className="object-fit-cover border rounded"
        />

        <Table className="table table-dark table-striped rounded-top border-light">
          <thead>
            <tr>
              <th scope="col">
                <h5 className="text-center m-2">{name}</h5>
              </th>
            </tr>
          </thead>
          <tbody className="align-bottom">
            <tr>
              <td>
                <p className="">{description}</p>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <div className="d-flex justify-content-between">
                  <p className="  text-start">Date</p>{" "}
                  <p className="">
                    {date.getDate() +
                      "/" +
                      date.getMonth() +
                      "/" +
                      date.getFullYear()}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <div className="d-flex justify-content-between">
                  <p className="  text-start">Time </p>{" "}
                  <p className="">
                    {date.getHours() + ":" + date.getMinutes()}
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="d-flex justify-content-between">
                  <p className="  text-start">Duration</p>{" "}
                  <p className="">{duration} Minutes</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex justify-content-between">
                  <p className="  text-start">Capacity</p>{" "}
                  <p className="">{capacity}</p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <div className="d-flex justify-content-between">
                  <p className="  text-start">Location</p>{" "}
                  <p className=""><a href={location}>{location}</a></p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <div className="d-flex justify-content-between">
                  <p className="  text-start">Price</p>{" "}
                  <p className="">${ticket_price} Ton</p>{" "}
                </div>
              </td>
            </tr>
            {/*Ticket buy*/}
            <tr>
              <td className="d-flex justify-content-center">
            {address==undefined ?   <WalletConnector/>:( isLoading ?  (<Button className="w-100 rounded"  disabled>
                  Pending Request...
                </Button>):(<Button className="w-100 rounded" onClick={handleGetTicket}>
                  Get a Ticket
                </Button>)) }
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer
        className="bg-dark rounded-bottom pt-0"
        style={{ border: "none" }}
      >
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HomepageEventModal;

import React from "react";

import { InputCustom, Input, InputForModal } from "components/Input";
import {
  ButtonCustom,
  ButtonSubmitData,
  ButtonAddProductAdmin,
  ButtonAddProduct,
} from "components/Button";

import { AiFillEdit } from "react-icons/ai";

const ModalEditRanger = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="cursor-pointer">
        <AiFillEdit />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom py-5 sm:modal-middle">
        <div className="bg-white modal-box w-[600px] overflow-auto border p-6">
          <h3 className="font-bold text-lg text-center">Edit Status Ranger</h3>
          <hr className="text-line mt-6" />

          {/* Form Product */}
          <div className="mt-6 mb-5">
            <p className="text-left font-normal text-lg">Status</p>
            <select
              // value={objSubmit.category}
              // onChange={(e) => handleChange(e.target.value, "category")}
              id="category"
              class="w-full h-14 border pl-4 rounded-lg text-base mt-2 text-secondary"
            >
              <option value="avaliable">Avaliable</option>
              <option value="duty">Duty</option>
              <option value="off">Off Work</option>
            </select>
          </div>

          <div>
            <p className="text-left font-normal text-lg">Phone Number</p>
            <InputCustom
              // value={objSubmit.phone}
              // onChange={(e) => handleChange(e.target.value, "phone")}
              className="w-full h-14 border pl-4 rounded-lg text-base mt-2 text-secondary"
              placeholder="085797556123"
            />
          </div>

          {/* Button Add and Close */}
          <hr className="mt-9" />
          <div>
            <ButtonCustom
              // onClick={() => handleEditProduct()}
              className="bg-primary mt-6 rounded-lg h-11 w-full flex items-center justify-center font-normal text-sm text-white cursor-pointer"
              label="Edit Info"
            />

            <div className="modal-action">
              <label htmlFor="my-modal-6">
                <ButtonCustom
                  className="border h-11 w-[464px] rounded-lg  flex items-center justify-center font-normal text-sm text-[#999999] cursor-pointer"
                  label="Close"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalAdminProduct = () => {
  return (
    <div>
      <label htmlFor="my-modal3" className="">
        <ButtonAddProduct />
      </label>

      <div className="">
        <input
          type="checkbox"
          id="my-modal"
          className="modal-toggle w-[600px] h-[802px]"
        />
        <div className="modal ">
          <div className="modal-box w-[600px] h-[802px]">
            <div className="font-semibold text-xl text-black text-center">
              Add New Product
            </div>
            <div className="divider text-[#F0F0F0]" />

            <h3 className="font-normal text-[#373737] text-lg">
              Photo Product
            </h3>
            <ButtonSubmitData />

            <p className="mt-4 font-normal text-[#373737] text-lg">
              Product Name
            </p>
            <Input />

            <p className=" mt-4 font-normal text-[#351f1f] text-lg">
              Rent Price
            </p>
            <Input />

            <p className="mt-4 font-normal text-[#373737] text-lg">
              Description
            </p>
            <Input />

            <div className="m-none divider text-[#F0F0F0]" />
            <ButtonAddProductAdmin />
            <label
              htmlFor="my-modal"
              className="btn mt-4 font-medium text-base text-center justify-center h-[44px] w-[458px] px-4 py-1 rounded-md text-[#999999] bg-white border-2 border-[#999999] transform active:scale-75 transition-transform flex items-center"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalEditAdminProduct = () => {
  return (
    <div>
      <label htmlFor="my-modal2" className="fill-secondary text-3xl mr-4">
        <AiFillEdit />
      </label>

      <div className="">
        <input
          type="checkbox"
          id="my-modal"
          className="modal-toggle w-[600px] h-[802px]"
        />
        <div className="modal ">
          <div className="modal-box w-[600px] h-[802px]">
            <div className="font-semibold text-xl text-black text-center">
              Edit Product
            </div>
            <div className="divider text-[#F0F0F0]" />

            <h3 className="font-normal text-[#373737] text-lg">
              Photo Product
            </h3>
            <ButtonSubmitData />

            <p className="mt-4 font-normal text-[#373737] text-lg">
              Product Name
            </p>
            <Input />

            <p className=" mt-4 font-normal text-[#351f1f] text-lg">
              Rent Price
            </p>
            <Input />

            <p className="mt-4 font-normal text-[#373737] text-lg">
              Description
            </p>
            <Input />

            <div className="m-none divider text-[#F0F0F0]" />
            <ButtonAddProductAdmin />
            <label
              htmlFor="my-modal"
              className="btn mt-4 font-medium text-base text-center justify-center h-[44px] w-[458px] px-4 py-1 rounded-md text-[#999999] bg-white border-2 border-[#999999] transform active:scale-75 transition-transform flex items-center"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalAdminUSer = () => {
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="cursor-pointer font-medium text-lg text-center justify-center h-12 w-[183px] rounded-lg px-6 py-1 text-white bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-black"
      >
        Edit Data
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Edit Climbers Data
          </h3>
          <div className="divider text-[#E2E7E9]" />
          <p className="font-normal text-lg text[#373737] text-left">
            Is Climbers
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Male Climbers
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Female Climbers
          </p>
          <InputForModal />
          <div className="divider text-[#E2E7E9]" />
          <ButtonCustom
            className="cursor-pointer font-medium text-center justify-center h-11 w-full px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white"
            label="Save"
          />
          <br />
          <label htmlFor="my-modal-3">
            <ButtonCustom
              className="cursor-pointer font-medium text-center justify-center h-11 w-full px-6 py-1 rounded-lg text-[#999999] bg-white transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white"
              label="Close"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export {
  ModalEditRanger,
  ModalAdminProduct,
  ModalEditAdminProduct,
  ModalAdminUSer,
};

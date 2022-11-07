import React from "react";

export const InputCustom = (props) => {
  return (
    <input
      className={props.className}
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
      type={props.placeholder}
    />
  );
};

export const InputDate = (props) => {
  return (
    <input
      className="w-full h-14 py-2 px-3 border text-secondary border-[#577D7B] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="dd/mm/yy"
      type="date"
    />
  );
};

export const InputSelectEntrance = (props) => {
  return (
    <select
      onChange={props.onChange}
      id="category"
      class="w-full h-14 py-2 px-3 border text-secondary border-[#577D7B] rounded-lg font-medium text-base"
    >
      <option value="" className="font-normal text-base text-secondary">
        Select the entrance
      </option>
      <option value="cibodas" className="font-normal text-base text-secondary">
        Entrance Cibodas
      </option>
      <option
        value="gunung-putri"
        className="font-normal text-base text-secondary"
      >
        Entrance Gunung Putri
      </option>
      <option
        value="salabintana"
        className="font-normal text-base text-secondary"
      >
        Entrance Salabintana
      </option>
    </select>
  );
};

export const InputSelectPerson = (props) => {
  return (
    <select
      onChange={props.onChange}
      id="category"
      class="w-full h-14 py-2 px-3 border text-secondary border-[#577D7B] rounded-lg font-normal text-base"
    >
      <option value="1" className="font-normal text-base text-secondary">
        1
      </option>
      <option value="2" className="font-normal text-base text-secondary">
        2
      </option>
      <option value="3" className="font-normal text-base text-secondary">
        3
      </option>
      <option value="4" className="font-normal text-base text-secondary">
        4
      </option>
      <option value="5" className="font-normal text-base text-secondary">
        5
      </option>
      <option value="6" className="font-normal text-base text-secondary">
        6
      </option>
    </select>
  );
};

export const InputSelectRanger = (props) => {
  return (
    <select
      onChange={props.onChange}
      id="category"
      class="w-full h-14 py-2 px-3 border text-secondary border-[#577D7B] rounded-lg font-medium text-base"
    >
      <option value="" className="font-normal text-base text-secondary">
        Add Ranger
      </option>
      <option value="" className="font-normal text-base text-secondary">
        Fajar Nugraha
      </option>
      <option
        value={props.value}
        className="font-normal text-base text-secondary"
      >
        {props.RangerName}
      </option>
    </select>
  );
};

export const Input = (props) => {
  return (
    <input
      className="w-full h-14 py-2 px-3 border-2 border-[#577D7B] rounded-md"
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export const InputEmail = (props) => {
  return (
    <input
      className="h-[60px] w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Email address"
      type={props.type}
    />
  );
};

export const InputPassword = (props) => {
  return (
    <input
      className="h-[60px] w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Password"
      type={props.type}
    />
  );
};

export const InputFullNameLogin = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Full Name"
      type={props.type}
    />
  );
};

// Ranger Input
export const InputFullNameRangers = (props) => {
  return (
    <input
      className="h-14 w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Full Name"
      type="text"
    />
  );
};

export const InputPhoneNumber = (props) => {
  return (
    <input
      className="h-14 w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="+62 85797556122"
      type="text"
    />
  );
};

export const InputPlaceDateBirth = (props) => {
  return (
    <input
      className="h-14 w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Sukabumi, 12 Oktober 2000"
      type="text"
    />
  );
};

export const InputGender = (props) => {
  return (
    <input
      className="h-14 w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Laki-laki"
      type="text"
    />
  );
};

export const InputAddress = (props) => {
  return (
    <input
      className="h-14 w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder="Jl. Legok Hangser"
      type="text"
    />
  );
};

export const InputForModal = (props) => {
  return (
    <input
      className="h-14 w-full pl-4 border border-[#B3B3B3] rounded-lg text-base font-normal"
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
      type="text"
    />
  );
};

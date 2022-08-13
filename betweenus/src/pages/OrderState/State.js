import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import JoinBefore from "../../components/orderState/JoinBefore";
import HostNoGuest from "../../components/orderState/HostNoGuest";
import HostYesGuest from "../../components/orderState/HostYesGuest";
import GuestWaitRecruit from "../../components/orderState/GuestWaitRecruit";
import TopOrderState from "../../components/orderState/TopOrderState";

const State = () => {
  const user = "host"; /*guest*/
  const join = true; /*true*/
  const guest = true; /*true*/
  const recruit = true;

  if (user === "host") {
    if (join) {
      if (recruit) {
        return (
          <>
            <MetaTag />
            <TopOrderState />
            <BottomNavigation />
          </>
        );
      } else {
        if (guest) {
          return (
            <>
              <MetaTag />
              <HostYesGuest />
              <BottomNavigation />
            </>
          );
        } else {
          return (
            <>
              <MetaTag />
              <HostNoGuest />
              <BottomNavigation />
            </>
          );
        }
      }
    } else {
      return (
        <>
          <MetaTag />
          <JoinBefore />
          <BottomNavigation />
        </>
      );
    }
  } else if (user === "guest") {
    if (join) {
      if (recruit) {
        return (
          <>
            <MetaTag />
            <TopOrderState />
            <BottomNavigation />
          </>
        );
      } else {
        return (
          <>
            <MetaTag />
            <GuestWaitRecruit />
            <BottomNavigation />
          </>
        );
      }
    } else {
      return (
        <>
          <MetaTag />
          <JoinBefore />
          <BottomNavigation />
        </>
      );
    }
  }
};

export default State;

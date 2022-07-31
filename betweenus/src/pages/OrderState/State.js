import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import JoinBefore from "../../components/OrderState/JoinBefore";
import HostNoGuest from "../../components/OrderState/HostNoGuest";
import HostYesGuest from "../../components/OrderState/HostYesGuest";
import GuestWaitRecruit from "../../components/OrderState/GuestWaitRecruit";
import TopOrderState from "../../components/OrderState/TopOrderState";

const State = () => {
  const user = "guest"; /*guest*/
  const join = true; /*true*/
  const guest = false; /*true*/
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

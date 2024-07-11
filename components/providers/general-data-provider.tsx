"use client";
import { UserModelSafe } from "@/__generated__/graphql";
import { CHECK_AUTH } from "@/apis/signup.api";
import { USER_PROFILE } from "@/apis/user.api";
import { useLazyQuery, useQuery } from "@apollo/client";
import { createContext, useCallback, useState } from "react";

type Token = { access_token: string };

type LoggedInData =
  | {
      isLoading: false;
      isLoggedIn: true;
      userInfo: UserModelSafe;
    }
  | {
      isLoading: false;
      isLoggedIn: false;
      userInfo: undefined;
    };

type AuthLoading = {
  isLoading: true;
  isLoggedIn?: never;
  userInfo?: never;
};

type GeneralDataContextValue = {
  setToken: (token: Token) => void;
  deleteToken: () => void;
} & (LoggedInData | AuthLoading);

export const GeneralDataContext = createContext<GeneralDataContextValue>({
  isLoading: true,
  setToken: () => {},
  deleteToken: () => {},
});

interface GeneralDataWrapperProps {
  children?: React.ReactNode;
}

export const GeneralDataWrapper: React.FC<GeneralDataWrapperProps> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserModelSafe | null>();
  //   const checkTokenValidity = async () => {
  //     try {
  //       await axiosInstance.get("/user/check/auth");
  //       return true;
  //     } catch (err) {
  //       return false;
  //     }
  //   };
  const [callUserProfile, { data, refetch, loading: profileLoading }] =
    useLazyQuery(USER_PROFILE, {
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        setUserInfo(data.userProfile);
      },
      onError: () => {
        setUserInfo(null);
      },
    });
  const { loading: checkAuthLoading } = useQuery(CHECK_AUTH, {
    onCompleted: () => {
      callUserProfile();
    },
  });

  //   const {
  //     data: userInfo,
  //     isLoading,
  //     refetch,
  //   } = useQuery("user-auth", async () => {
  //     // const localToken = localStorage.getItem(tokenTitle);
  //     // if (localToken === null) {
  //     //   delete axiosInstance.defaults.headers.common.Authorization;
  //     //   return undefined;
  //     // }
  //     // axiosInstance.defaults.headers.common.Authorization = `Bearer ${localToken}`;
  //     const isValid = await checkTokenValidity();
  //     if (!isValid) {
  //       return undefined;
  //     }
  //     const res = await axiosInstance.get("/user");
  //     const user: InfoParams = res.data;
  //     return user;
  //   });

  const setToken = useCallback(
    (newToken: Token) => {
      localStorage.setItem("token", newToken.access_token);
      refetch();
    },
    [refetch]
  );
  const deleteToken = useCallback(() => {
    localStorage.removeItem("token");
    refetch();
  }, [refetch]);
  return (
    <GeneralDataContext.Provider
      value={
        {
          userInfo,
          isLoading: profileLoading || checkAuthLoading,
          setToken,
          deleteToken,
          isLoggedIn: !!userInfo,
        } as GeneralDataContextValue
      }
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

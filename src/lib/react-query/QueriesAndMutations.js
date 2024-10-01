import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery
} from "@tanstack/react-query";

import QUERY_KEYS from "./queryKeys";
import {
  createUserAccount,
  confirmAccount,
  loginUserAccount,
  socialLogin,
  getUser,
  changePassword,
  updateAccount
} from "../api";

// =====================================================================================================================
// Users & Auth
// =====================================================================================================================
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: user => createUserAccount(user)
  });
};

export const useConfirmAccount = () => {
  return useMutation({
    mutationFn: data => confirmAccount(data)
  });
};

export const useLoginUserAccount = () => {
  return useMutation({
    mutationFn: user => loginUserAccount(user)
  });
};

export const useSocialLogin = () => {
  return useMutation({
    mutationFn: data => socialLogin(data)
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: data => changePassword(data)
  });
};

export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: data => updateAccount(data)
  });
};

export const useGetUser = user => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER],
    queryFn: getUser,
    enabled: !!user
  });
};

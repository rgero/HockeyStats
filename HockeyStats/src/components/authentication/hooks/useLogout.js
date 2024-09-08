/* eslint-disable no-unused-vars */

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as logoutApi } from "../../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return { logout, isLoading };
}
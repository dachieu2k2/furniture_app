import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  // defaultOptions: {
  //     queries: {
  //         //   onError: queryErrorHandler,
  //         staleTime: 600000, // 10 minutes
  //         cacheTime: 900000, // 15 minutes
  //         refetchOnMount: false,
  //         refetchOnReconnect: false,
  //         refetchOnWindowFocus: false,
  //     },
  //     mutations: {
  //         onError: queryErrorHandler,
  //     },
  // },

  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
    mutations: {
      onError(error, variables, context) {},
      retry: 1,
    },
  },
});

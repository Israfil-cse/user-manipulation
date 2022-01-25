  //default window focus stoper 
  // {defaultOptions: {queries : {refetchOnWindowFocus:false}}}

import { QueryClient } from "react-query";
const queryClient = new QueryClient({defaultOptions: {queries : {staleTime:Infinity}}});
export default queryClient;
import { useDispatch } from "react-redux";

import type { AppDispatch } from "../slices/slices";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

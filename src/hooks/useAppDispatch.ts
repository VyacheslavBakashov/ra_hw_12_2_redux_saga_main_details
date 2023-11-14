import { useDispatch } from 'react-redux';

import type { AppDispatchTypes } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatchTypes>();
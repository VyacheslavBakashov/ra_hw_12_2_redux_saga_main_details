import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootStateTypes } from '../redux/store';

export const useAppSelector: TypedUseSelectorHook<RootStateTypes> = useSelector;
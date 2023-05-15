import React from "react";

export interface State {
	displaySidebar: boolean;
	displaySearch: boolean;
	drawerView: string | null;
	toastText: string;
}

const initialState = {
	displaySidebar: false,
	displayModal: false,
	displaySearch: false,
	drawerView: null,
	toastText: "",
};

type Action =
	| {
			type: "OPEN_SIDEBAR";
	  }
	| {
			type: "CLOSE_SIDEBAR";
	  }
	| {
			type: "OPEN_SEARCH";
	  }
	| {
			type: "CLOSE_SEARCH";
	  }
	| {
			type: "SET_TOAST_TEXT";
			text: ToastText;
	  }
	| {
			type: "SET_DRAWER_VIEW";
			view: DRAWER_VIEWS;
	  };

type DRAWER_VIEWS = "CART_SIDEBAR" | "MOBILE_MENU";
type ToastText = string;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
	switch (action.type) {
		case "OPEN_SIDEBAR": {
			return {
				...state,
				displaySidebar: true,
			};
		}
		case "CLOSE_SIDEBAR": {
			return {
				...state,
				displaySidebar: false,
				drawerView: null,
			};
		}
		case "OPEN_SEARCH": {
			return {
				...state,
				displaySearch: true,
			};
		}
		case "CLOSE_SEARCH": {
			return {
				...state,
				displaySearch: false,
			};
		}
		case "SET_DRAWER_VIEW": {
			return {
				...state,
				drawerView: action.view,
			};
		}
		case "SET_TOAST_TEXT": {
			return {
				...state,
				toastText: action.text,
			};
		}
	}
}

export const UIProvider: React.FC = (props) => {
	const [state, dispatch] = React.useReducer(uiReducer, initialState);

	const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
	const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
	const toggleSidebar = () =>
		state.displaySidebar
			? dispatch({ type: "CLOSE_SIDEBAR" })
			: dispatch({ type: "OPEN_SIDEBAR" });

	const openSearch = () => dispatch({ type: "OPEN_SEARCH" });
	const closeSearch = () => dispatch({ type: "CLOSE_SEARCH" });

	const setDrawerView = (view: DRAWER_VIEWS) =>
		dispatch({ type: "SET_DRAWER_VIEW", view });

	const value = React.useMemo(
		() => ({
			...state,
			openSidebar,
			closeSidebar,
			toggleSidebar,
			openSearch,
			closeSearch,
			setDrawerView,
		}),
		[state]
	);

	return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
	const context = React.useContext(UIContext);
	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`);
	}
	return context;
};

export const ManagedUIContext: React.FC = ({ children }) => <UIProvider>{children}</UIProvider>


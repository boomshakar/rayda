export interface CartArrayModel {
	cartItems: CartProductModel[];
	amount: number;
	total: number;
	isLoading: boolean;
}

export interface CartProductModel {
	id: string;
	prdt_img: string;
	prdt_title: string;
	prdt_subTitle: string;
	prdt_desc: string;
	prdt_color: string;
	prdt_size: string;
	prdt_price: number;
}

export interface ProductListModel {
	list: ProductItem[];
	isLoading: boolean;
}
export interface ProductItem {
	id: string;
	prdt_img: string;
	prdt_imgXs: string;
	prdt_imgXl: string;
	prdt_title: string;
	prdt_subTitle: string;
	prdt_desc: string;
	prdt_color: Array<string>;
	prdt_size: Array<string>;
	prdt_price: number;
	prdt_instock: boolean;
}

export interface UiStateModel {
	cartDrawer: boolean;
}

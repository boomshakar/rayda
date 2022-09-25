export interface CartArrayModel {
	cartItems: CartProductModel[];
	amount: number;
	total: number;
	tax: number;
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
	prdt_qty: number;
	prdt_imgXs: string;
	prdt_imgXl: string;
}

export interface ProductListModel {
	list: ProductItemModel[];
	isLoading: boolean;
}
export interface ProductItemModel {
	id: string;
	prdt_img: string;
	prdt_imgXs: string;
	prdt_imgXl: string;
	prdt_title: string;
	prdt_subTitle: string;
	prdt_desc: string;
	prdt_color: string;
	prdt_size: string;
	prdt_price: number;
	prdt_instock: boolean;
	// prdt_qty: number;
}

export interface UiStateModel {
	cartDrawer: boolean;
}

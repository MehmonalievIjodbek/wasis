import { useUI } from "@contexts/ui.context";
import { Drawer } from "@components/common/drawer/drawer";

const ManagedDrawer = () => {
	const { displayCart, closeCart } = useUI();
	const contentWrapperCSS = { right: 0 }
	return (
		<Drawer
			open={displayCart}
			placement={"right"}
			onClose={closeCart}
			handler={false}
			showMask={true}
			level={null}
			contentWrapperStyle={contentWrapperCSS}
		>
		<div>2</div>
		</Drawer>
	);
};

export default ManagedDrawer;

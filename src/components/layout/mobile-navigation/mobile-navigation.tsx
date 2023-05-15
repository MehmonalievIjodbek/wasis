import { useUI } from "@contexts/ui.context";
import { Drawer } from "@components/common/drawer/drawer";
import MobileMenu from '@components/layout/header/mobile-menu';

const BottomNavigation: React.FC = () => {
	const {
		closeSidebar,
		displaySidebar,
	} = useUI();

	const contentWrapperCSS = { left: 0 };

	return (
		<>
			<Drawer
				placement={"left"}
				open={displaySidebar}
				onClose={closeSidebar}
				handler={false}
				showMask={true}
				level={null}
				contentWrapperStyle={contentWrapperCSS}
			>
				<MobileMenu />
			</Drawer>
		</>
	);
};

export default BottomNavigation;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView, 
    View, 
    SafeAreaView} from 'react-native';
import HeaderUser from './HeaderUser';
import UserOptionTag from './UserOptionTag';
import record from '../../assets/icon/icon_record.png';
import store from '../../assets/icon/store.png';
import PurchaseStatus from './PurchaseStatus';
import bagIcon from '../../assets/icon/bag.png'
import HorizontalProductList from './HorizontalProductList';
import SeparateView from './SeparateView';
import heartIcon from '../../assets/icon/heart.png';
import clockIcon from '../../assets/icon/clock.png';
import starIcon from '../../assets/icon/star.png';
import voucherIcon from '../../assets/icon/voucher.png';
import profileIcon from '../../assets/icon/profile.png';
import assistantIcon from '../../assets/icon/assistant.png';
import questionMarkIcon from '../../assets/icon/question.png';
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../Navigator/BottomNavigator';

export default function MainUserScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style = {{height: '100%'}}>
        <BottomNavigator 
            height = {90}
            currentActive = {"User"}
        />
    <ScrollView>
            <HeaderUser/>
            <SeparateView/>
            <UserOptionTag 
                sourceIcon = {record}
                title = {"Đơn mua"}
                description = {"Xem lịch sử mua hàng"}
            />
            <PurchaseStatus/>
            <SeparateView/>
            <UserOptionTag 
                sourceIcon = {bagIcon}
                title = {"Mua lại"}
                description = {"Xem thêm sản phẩm"}
            />
            <HorizontalProductList/>
            <SeparateView/>
            <UserOptionTag 
                sourceIcon = {store}
                highlight = {true}
                title = {"Bắt đầu bán"}
                description = {"Đăng ký miễn phí"}
            />
            <SeparateView/>
            <UserOptionTag 
                sourceIcon = {voucherIcon}
                title = {"Voucher của tôi"}
            />
            <UserOptionTag 
                sourceIcon = {heartIcon}
                title = {"Đã thích"}
                description = {"1 Like"}
            />
            <UserOptionTag 
                sourceIcon = {clockIcon}
                title = {"Đã xem gần đây"}
            />
            <UserOptionTag 
                sourceIcon = {starIcon}
                title = {"Đánh giá của tôi"}
            />
            <SeparateView/>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("EditInfo");
                }}
            >
                <UserOptionTag 
                    sourceIcon = {profileIcon}
                    title = {"Thiết lập tài khoản"}
                />
            </TouchableOpacity>
            <UserOptionTag 
                sourceIcon = {questionMarkIcon}
                title = {"Trung tâm trợ giúp"}
            />
            <UserOptionTag 
                sourceIcon = {assistantIcon}
                title = {"Trò chuyện với Shopee"}
            />
               <View style = {{height: 50}}/>
        </ScrollView>
    </SafeAreaView>
  )
}

import React from 'react';
import { StyleSheet, View, Button, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native';

const city_names = '北京 上海 深圳 广州 青海 湖南 湖北 江苏 辽宁 青藏 四川 甘肃'.split(' ');


export default class extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			isLoading: false,
			dataSource: city_names,
		}
	}
	static navigationOptions() {
		return {
			tabBarLabel: '分页',
			headerTitle: '分页'
		}
	}
	_renderItem(data) {
		return <View style={styles.items}>
			<Text style={styles.itemsText}>{data.item}</Text>
		</View>
	}
	loadData(){
		this.setState({isLoading: true});
		setTimeout(()=>{
			this.setState({dataSource: this.state.dataSource.reverse(),isLoading: false})
		}, 2000)
	}
	genIndicator(){
		return (
			<View style={styles.row}>
				<ActivityIndicator size={'large'}
				animating={true}
				color={['orange']}/>
				<Text style={{marginLeft:6}}>正在加载</Text>
			</View>
			)
	}
	loadMore(){
		this.setState({isLoading: true});
		setTimeout(() => {
			this.setState({dataSource:this.state.dataSource.concat(this.state.dataSource),isLoading: false})
		},2000)
	}
	render() {
		const { navigation } = this.props;
		
		return (
			<View style={ styles.settingsContainer}>
				<Text>{JSON.stringify(navigation)}</Text>
				<FlatList data={this.state.dataSource}
				renderItem={(data) => this._renderItem(data)}
				// refreshing={this.state.isLoading}
				// onRefresh={() => this.loadData()}
				ListFooterComponent={() => this.genIndicator()}
				onEndReached={() => this.loadMore()}
				refreshControl={
					<RefreshControl
					title={'loading'}
					color={['red']}
					tintColor={'orange'}
					refreshing={this.state.isLoading}
					onRefresh={() => this.loadData()}/>
				} />
			</View>
			)
	}
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,

	},
	items: {
		justifyContent: 'center',
		alignItems: 'center',
		height:130,
		backgroundColor:'blue',
		marginBottom: 6
	},
	row:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemsText: {
		color:'white',
		fontSize:13,

	}
})
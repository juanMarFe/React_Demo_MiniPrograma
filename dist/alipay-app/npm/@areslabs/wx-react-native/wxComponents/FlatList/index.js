var _my=require("../../../../../__antmove/api/index.js")(my);var wx=_my;var _interopRequireDefault=require("./@babel/runtime/helpers/interopRequireDefault");var _defineProperty2=_interopRequireDefault(require("./@babel/runtime/helpers/defineProperty"));var top=80;Component(wx.__bridge.reactCompHelper({ready:function ready(){this.onRefreshMethod=this.data.onRefresh;this.onScrollFunc=this.data.onScroll;this.onScrollEndDragFunc=this.data.onScrollEndDrag;this.hasChanges=[];},methods:{scrollTo:function scrollTo(pos){var x=pos.x,y=pos.y;var mayY=this.data._r.onRefreshPassed?y+top:y;this.setData({outTop:mayY,outLeft:x});},scrollToOffset:function scrollToOffset(pos){var offset=pos.offset;var mayY=this.data._r.onRefreshPassed?offset+top:offset;this.setData({outTop:mayY});},formatEvent:function formatEvent(e){return{nativeEvent:{contentOffset:{x:e.detail.scrollLeft,y:e.detail.scrollTop}}};},recoverRefresh:function recoverRefresh(){var _this=this;if(this.stopTimerFlag){clearTimeout(this.stopTimerFlag);}this.stopTimerFlag=setTimeout(function(){var refreshing=_this.data._r.refreshing;if(_this.lastVal<=80&&!refreshing){_this.setData({sr:false});}},100);},outScroll:function outScroll(e){this.lastVal=e.detail.scrollTop;if(this.data._r.onRefreshPassed&&!this.underTouch){this.recoverRefresh();}if(this.onScrollEndDragFunc){this._scrollEvent=e;}if(this.onScrollFunc){this.onScrollFunc(this.formatEvent(e));}var stickyInfos=this.data._r.stickyInfos;if(stickyInfos){var infos=stickyInfos;if(Array.isArray(infos)&&infos.length>0){for(var k=0;k<infos.length;k++){var info=infos[k];if(this.lastVal>=info.baseOffset&&!this.hasChanges[k]){var _this$setData;this.hasChanges[k]=true;this.setData((_this$setData={},(0,_defineProperty2.default)(_this$setData,"sti.stickyContainerStyle"+info.index,"height:"+info.length+"px;width:100%;"),(0,_defineProperty2.default)(_this$setData,"sti.stickyStyle"+info.index,"position:fixed;top:0;width:100%;z-index: 1000;"),_this$setData));}else if(this.lastVal<info.baseOffset&&this.hasChanges[k]){var _this$setData2;this.hasChanges[k]=false;this.setData((_this$setData2={},(0,_defineProperty2.default)(_this$setData2,"sti.stickyContainerStyle"+info.index,""),(0,_defineProperty2.default)(_this$setData2,"sti.stickyStyle"+info.index,""),_this$setData2));}}}}},startTouch:function startTouch(){this.underTouch=true;this.data.onScrollBeginDrag&&this.data.onScrollBeginDrag();},onScrollToupper:function onScrollToupper(){this.lastVal=0;},leaveTouch:function leaveTouch(e){if(this.data._r.horizontal){return;}this.underTouch=false;if(this._scrollEvent&&this.onScrollEndDragFunc){this.onScrollEndDragFunc(this.formatEvent(this._scrollEvent));this._scrollEvent=undefined;}if(!this.data._r.onRefreshPassed)return;if(this.lastVal<20){this.onRefreshMethod&&this.onRefreshMethod();return;}var refreshing=this.data._r.refreshing;if(this.lastVal<=top&&this.lastVal>=20&&!refreshing){this.setData({sr:false});}},scrollToIndex:function scrollToIndex(_ref){var _this2=this;var index=_ref.index,animated=_ref.animated;this.setData({index_id:"id_"+index});if(animated){this.setData({withAni:true},function(){_this2.setData({index_id:"id_"+index,withAni:false});});}else{this.setData({index_id:"id_"+index});}},onEndReached:function onEndReached(){var _this3=this;if(this.data._r.onRefreshPassed&&!this.hasRefreshFirstCall&&!this.data._r.horizontal){this.hasRefreshFirstCall=true;return;}var query=wx.createSelectorQuery().in(this);query.select("#container").boundingClientRect(function(res){var height=res.height;var width=res.width;if(_this3.data._r.horizontal&&_this3.lastWidth===width||!_this3.data._r.horizontal&&_this3.lastHeight===height){return;}_this3.lastWidth=width;_this3.lastHeight=height;_this3.data.onEndReached&&_this3.data.onEndReached();}).exec();}},data:{withAni:false,outLeft:0,index_id:null,sr:false,sti:{}}}));
(this.webpackJsonppicasso=this.webpackJsonppicasso||[]).push([[0],{167:function(e,t,n){},200:function(e,t){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(44),r=n.n(a),i=n(19),s=n(69),l=n(11),d=n(235),u=n(52),b=Object(u.a)()({state:0,selectors:function(e,t){return{state:function(){return e}}},reducers:{increment:function(e,t){return e+t}},effects:function(e){return{incrementAsync:function(t,n){e.count.increment(t)}}}}),f=n(239),j={common:b,room:Object(u.a)()({state:{isEnteredRoom:!1,isConnectedSocket:!1,userInfo:null,participants:[],videos:[],chatList:[]},selectors:function(e,t){return{state:function(){return e},localVideoState:function(){return t(e,(function(e){var t=e.userInfo,n=e.videos;return t?n.find((function(e){return e.userId===t.userId})):null}))}}},reducers:{updateSocketConnectionState:function(e,t){return e.isConnectedSocket=t,e},updateEnteredRoomState:function(e,t){return e.isEnteredRoom=t,e},setParticipants:function(e,t){var n=Object(f.a)(t);return e.participants=n,e},setUserInfo:function(e,t){return e.userInfo=t,e},addVideo:function(e,t){return e.videos.push(t),e},updateVideoEnabled:function(e,t){return e.videos.forEach((function(e){e.userId===t.userId&&(e.videoEnabled=t.enabled)})),e},addChat:function(e,t){return e.chatList.push(t),e}},effects:function(e){return{incrementAsync:function(t,n){e.count.increment(t)}}}})},p=n(146),m=n(147),h=Object(u.b)({models:j,plugins:[Object(p.a)(),Object(m.a)()]}),g=h.select,O=n(222),v=n(238),x=n(224),k=n(145),I=n(225),y=n(236),w=(n(237),n(131)),C=n.n(w),S=(n(167),n.p+"static/media/bg-home.0e813f75.png"),E=n(3),R=function(){var e=Object(l.g)(),t=Object(c.useCallback)((function(){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return C()(e).join("-")}(3);e.push("/room/".concat(t))}),[]);return Object(E.jsx)(O.a,{h:"80vh",color:"white",children:Object(E.jsx)(v.b,{children:Object(E.jsxs)(x.a,{w:"500px",color:"white",textAlign:"center",children:[Object(E.jsx)("img",{src:S,alt:"\ud654\uc0c1\ud68c\uc758 \ub9cc\ub4e4\uba70 \ubc30\uc6b0\ub294 WebRTC"}),Object(E.jsx)(I.a,{mt:10,mb:10,textAlign:"center",fontSize:40,color:"#000",children:"\ud654\uc0c1\ud68c\uc758 \ub9cc\ub4e4\uba70 \ubc30\uc6b0\ub294 WebRTC"}),Object(E.jsx)(k.a,{w:"260px",colorScheme:"yellow",size:"lg",variant:"solid",onClick:t,children:"\uc2dc\uc791\ud558\uae30"})]})})})},N=n(106),T=n(234),U=n(133),A=n.n(U)()("https://webrtclab.herokuapp.com"),M=null,P=null,D=null,L=function(e){var t=e.type,n=e.body,c=e.to,o=void 0===c?"all":c,a={roomId:M,senderId:P,to:"all"===o?o:z(o),type:t,body:n};A.send(a),console.log("sendMessage :>> ",a)},V=function(e){D=e},z=function(e){var t=null;return D&&Object.keys(D).forEach((function(n){D[n].userId===e&&(t=D[n].socketId)})),t},K=A,J=n(82),W=n.n(J),G=new W.a,q=n(83),B=function e(){Object(q.a)(this,e)},H=n(53),F=n.n(H),Q=n(84),X=n(134),Y=n(148),Z=n(144),$=window.RTCPeerConnection,_=window.RTCSessionDescription,ee=window.RTCIceCandidate,te=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(q.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).localStream=null,e.peers=[],e.peerConnectionOptions=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]},{urls:["turn:107.150.19.220:3478"],credential:"turnserver",username:"subrosa"}],e}return Object(X.a)(n,[{key:"getUserMedia",value:function(){var e=Object(Q.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(t);case 3:this.localStream=e.sent,e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",new Promise((function(t,n){return n(e.t0)})));case 9:return e.abrupt("return",this.localStream);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"startRtcConnection",value:function(e){var t=e.targetUserId,n=e.type,c=this.createPeerConnection({targetUserId:t,type:n});this.createOffer(c)}},{key:"createPeerConnection",value:function(e){var t=this,n=e.targetUserId,c=e.type;console.log("[peer] createPeerConnection :>> ",n,c);var o={targetUserId:n,type:c,pc:null};return o.pc=new $(this.peerConnectionOptions),console.log("[peer] new peer ",o),o.pc.onicecandidate=function(e){e.candidate?L({to:n,type:"signaling",body:{label:e.candidate.sdpMLineIndex,id:e.candidate.sdpMid,candidate:e.candidate.candidate}}):console.info("[peer] candidate denied",e.candidate)},o.pc.ontrack?(o.pc.ontrack=function(e){console.log("ontrack",e);var n=e.streams[0];t.emit("addRemoteStream",{userId:o.targetUserId,stream:n})},o.pc.onremovetrack=function(e){console.log("onremovetrack",e);var n=e.streams[0];t.emit("removeRemoteStream",{userId:o.targetUserId,stream:n})}):(o.pc.onaddstream=function(e){console.log("onaddstream",e),t.emit("addRemoteStream",{userId:o.targetUserId,stream:e.stream})},o.pc.onremovestream=function(e){console.log("onremovestream",e),t.emit("removeRemoteStream",{userId:o.targetUserId,stream:e.stream})}),o.pc.oniceconnectionstatechange=function(e){console.log("oniceconnectionstatechange","iceGatheringState: ".concat(o.pc.iceGatheringState," / iceConnectionState: ").concat(o.pc.iceConnectionState)),t.emit("iceConnectionStateChange",e)},this.peers.push(o),o}},{key:"createOffer",value:function(e){console.log("[peer] createOffer",e),this.localStream&&this.addTrack(e,this.localStream),e.pc.createOffer().then((function(t){e.pc.setLocalDescription(t),console.log("Sending offer description",t),L({to:e.targetUserId,type:"signaling",body:{peerType:e.type,sdp:t}})})).catch((function(e){console.error("Error createOffer",e)}))}},{key:"createAnswer",value:function(e,t){console.log("[peer] createAnswer",e,t),this.localStream&&this.addTrack(e,this.localStream),e.pc.setRemoteDescription(new _(t)).then((function(){e.pc.createAnswer().then((function(t){e.pc.setLocalDescription(t),console.log("Sending answer to peer.",t),L({to:e.targetUserId,type:"signaling",body:{peerType:e.type,sdp:t}})})).catch((function(e){console.error("Error createAnswer",e)}))})).catch((function(e){console.error("Error setRemoteDescription",e)}))}},{key:"signaling",value:function(e){console.log("[peer] signaling",e);var t=e.body,n=null===t||void 0===t?void 0:t.sdp,c=null===t||void 0===t?void 0:t.candidate;if(n){if("offer"===n.type){var o=this.createPeerConnection({targetUserId:e.senderId,type:t.peerType});this.createAnswer(o,n)}else if("answer"===n.type){var a=this.getPeer(e.senderId);null===a||void 0===a||a.pc.setRemoteDescription(new _(n))}}else if(c){var r=this.getPeer(e.senderId),i=new ee({sdpMid:t.id,sdpMLineIndex:t.label,candidate:c});null===r||void 0===r||r.pc.addIceCandidate(i)}}},{key:"addTrack",value:function(e,t){e.pc.addTrack?t.getTracks().forEach((function(n){e.pc.addTrack(n,t)})):e.pc.addStream(t)}},{key:"getPeer",value:function(e){return this.peers.find((function(t){return t.targetUserId===e}))}},{key:"getLocalStream",value:function(){return this.localStream}},{key:"mute",value:function(e){console.log("mute :>> ",e),"video"===e?this.localStream.getVideoTracks()[0].enabled=!1:this.localStream.getAudioTracks()[0].enabled=!1}},{key:"unmute",value:function(e){console.log("unmute :>> ",e),"video"===e?this.localStream.getVideoTracks()[0].enabled=!0:this.localStream.getAudioTracks()[0].enabled=!0}}]),n}(W.a),ne=(new B,new te),ce=n(228),oe=n(232),ae=n(233),re=n(231),ie=n(138),se=n(241),le=n(59),de=n(107),ue=(n(204),function(e){var t=e.children,n=e.id;return Object(E.jsx)("div",{className:"page-template",id:n,children:t})}),be=function(e){var t=e.roomId,n=Object(i.c)(g.room.state).userInfo,o=Object(i.b)(),a=Object(c.useCallback)((function(e,t){console.log("gate",e,t),o.room.updateSocketConnectionState(!0),o.room.setParticipants(t.participants)}),[o]),r=Object(c.useCallback)((function(e,t){console.log("onJoinUser",e,t),o.room.setParticipants(t.participants),V(t.participants),G.emit("join",t)}),[o]),s=Object(c.useCallback)((function(e){console.log("onLeaveUser",e),o.room.setParticipants(e.participants),V(e.participants),G.emit("leave",e)}),[o]),l=Object(c.useCallback)((function(e){console.log("onMessage",e),G.emit(e.type,e)}),[]),d=Object(c.useCallback)((function(){K.emit("gate",t),K.on("gate",a),K.on("join",r),K.on("leave",s),K.on("message",l)}),[t,a,r,s,l]);return Object(c.useEffect)((function(){n&&function(e){var t=e.roomId,n=e.userId;M=t,P=n}({roomId:t,userId:n.userId})}),[n]),Object(c.useEffect)((function(){d()}),[d]),null},fe=n(229),je={audio:!1,video:{width:{ideal:320},height:{ideal:240},frameRate:{ideal:25},facingMode:"user"}},pe=function(e){var t=e.roomId,n=Object(i.b)(),o=Object(c.useRef)(null),a=Object(c.useRef)(null),r=Object(c.useCallback)((function(){var e,c=null===(e=a.current)||void 0===e?void 0:e.value;if(c){var o={userId:Object(y.a)(),nickName:c,profileImg:"profileImg"};K.emit("enter",t,o),n.room.setUserInfo(o),n.room.updateEnteredRoomState(!0),window.localStorage.setItem("nickName",c)}else alert("\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!")}),[n,t,a]),s=Object(c.useCallback)((function(e){"Enter"===e.key&&(e.preventDefault(),r())}),[]);Object(c.useEffect)((function(){Object(Q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ne.getUserMedia(je);case 4:t=e.sent,o.current.srcObject=t;case 6:case"end":return e.stop()}}),e)})))()}),[]);var l=window.localStorage.getItem("nickName")||"";return Object(E.jsx)(x.a,{flex:"1",className:"gate-container",children:Object(E.jsx)(ce.a,{h:"90%",color:"white",direction:"column",justifyContent:"center",alignItems:"center",children:Object(E.jsxs)(x.a,{w:"260px",textAlign:"center",color:"facebook.900",children:[Object(E.jsx)(x.a,{w:"260px",h:"195px",mb:"6",textAlign:"center",borderRadius:"25px",overflow:"hidden",children:Object(E.jsx)("video",{autoPlay:!0,ref:o})}),Object(E.jsx)(fe.a,{placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!",maxLength:15,mb:"2",size:"lg",defaultValue:l,textAlign:"center",ref:a,onKeyDown:s,required:!0}),Object(E.jsx)(k.a,{colorScheme:"yellow",w:"100%",size:"lg",onClick:r,children:"\uc785\uc7a5\ud558\uae30"})]})})})},me=n(230),he=n(136),ge=n.n(he),Oe=function(){var e=Object(i.c)(g.room.state),t=e.chatList,n=e.userInfo,o=e.participants,a=Object(i.b)(),r=Object(c.useRef)(null),s=Object(c.useRef)(null),l=Object(c.useCallback)((function(){var e=r.current;e&&(e.scrollTop=e.scrollHeight)}),[r]),d=Object(c.useCallback)((function(){var e,t=null===(e=s.current)||void 0===e?void 0:e.value;s.current&&t&&(a.room.addChat({isMine:!0,nickName:n.nickName,message:t}),L({type:"chat",body:t}),s.current.value="",setTimeout((function(){return l()}),0))}),[a,n.nickName,l]),u=Object(c.useCallback)((function(e){e.shiftKey||"Enter"===e.key&&(e.preventDefault(),d())}),[d]),b=Object(c.useCallback)((function(e){e.shiftKey||"Enter"===e.key&&e.preventDefault()}),[]),f=Object(c.useCallback)((function(e){return o.find((function(t){return t.userId===e}))}),[o]),j=Object(c.useCallback)((function(e){var t,n,c=e.senderId,o=e.body,r=null!==(t=null===(n=f(c))||void 0===n?void 0:n.nickName)&&void 0!==t?t:null;r&&(a.room.addChat({nickName:r,message:o}),setTimeout((function(){return l()}),0))}),[a,f,l]);return Object(c.useEffect)((function(){G.removeAllListeners("chat"),G.on("chat",j)}),[j]),Object(E.jsx)(x.a,{margin:"6px 6px 0 6px",bg:"rgba(255,255,255,0.92)",color:"#000",borderRadius:"5px",boxShadow:"10px",children:Object(E.jsxs)(ce.a,{direction:"column",children:[Object(E.jsx)(x.a,{className:"chat-list-wrap",padding:"15px 12px 0 12px",ref:r,children:Object(E.jsx)("ul",{children:t.map((function(e,t){var n=e.isMine,c=e.nickName,o=e.message;return Object(E.jsxs)("li",{className:ge()({mine:n}),children:[Object(E.jsx)("p",{className:"nickname",children:c}),Object(E.jsx)("p",{className:"body",children:o})]},t)}))})}),Object(E.jsx)(x.a,{className:"chat-input-wrap",bg:"rgba(0,0,0,0.1)",padding:"5px",children:Object(E.jsxs)(ce.a,{h:"100%",justifyContent:"space-between",children:[Object(E.jsx)(me.a,{placeholder:"\uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!",background:"#fff",resize:"none",onKeyDown:b,onKeyUp:u,ref:s}),Object(E.jsx)(k.a,{w:"72px",h:"100%",colorScheme:"yellow",variant:"solid",color:"#fff",onClick:d,children:"Send"})]})})]})})},ve=n(240),xe=(n(205),function(e){var t=e.stream,n=e.videoEnabled,o=e.audioEnabled,a=e.nickName,r=Object(c.useRef)(null);return Object(c.useEffect)((function(){r.current&&(r.current.srcObject=t)}),[t]),Object(E.jsxs)("div",{className:"pip-video",children:[Object(E.jsx)("video",{autoPlay:!0,ref:r}),Object(E.jsx)(x.a,{className:"nickname",as:"span",borderRadius:"md",bg:"rgba(0,0,0,0.3)",color:"white",px:2,minWidth:"50px",children:a}),!n&&Object(E.jsx)(ce.a,{className:"video-off-visual",w:"100%",h:"100%",justifyContent:"center",alignItems:"center",children:Object(E.jsx)(ve.a,{src:"https://i.pinimg.com/originals/51/8f/df/518fdfc4f597e9c8efca678502a6c041.gif",size:"xl"})}),!o&&Object(E.jsx)(re.a,{className:"audio-off-icon",borderRadius:"5px",colorScheme:"yellow","aria-label":"button",fontSize:"24px",disabled:!0,icon:Object(E.jsx)(ie.a,{as:le.b})})]})}),ke=(n(206),function(){var e=Object(l.h)().roomId,t=Object(i.c)(g.room.state),n=t.isEnteredRoom,o=t.userInfo,a=t.participants,r=t.videos,s=Object(i.c)(g.room.localVideoState),d=Object(i.b)(),u=Object(c.useCallback)((function(){s&&(s.videoEnabled?(ne.mute("video"),d.room.updateVideoEnabled({userId:s.userId,enabled:!1}),L({type:"videoEnabled",body:!1})):(ne.unmute("video"),d.room.updateVideoEnabled({userId:s.userId,enabled:!0}),L({type:"videoEnabled",body:!0})))}),[d,s]),b=Object(c.useCallback)((function(){}),[e]),f=Object(c.useCallback)((function(){window.confirm("\ubbf8\ud305\uc5d0\uc11c \ub098\uac00\uaca0\uc2b5\ub2c8\uae4c?")&&(window.location.href="/")}),[]);Object(c.useEffect)((function(){o&&(G.on("signaling",(function(e){o.userId!==e.senderId&&ne.signaling(e)})),G.on("join",(function(e){var t=e.userInfo.userId;o.userId!==t&&ne.startRtcConnection({targetUserId:t,type:"userMedia"})})),G.on("videoEnabled",(function(e){var t=e.senderId,n=e.body;console.log("videoEnabled :>> ",t,n),d.room.updateVideoEnabled({userId:t,enabled:n})})))}),[d,o]),Object(c.useEffect)((function(){n&&!r.length&&d.room.addVideo({userId:o.userId,stream:ne.getLocalStream(),videoEnabled:!0,audioEnabled:!1})}),[d,o,n,r]),Object(c.useEffect)((function(){ne.on("addRemoteStream",(function(e){d.room.addVideo(Object(N.a)(Object(N.a)({},e),{},{videoEnabled:!0,audioEnabled:!1}))}))}),[d]);var j=Object(c.useMemo)((function(){return a.length>=4?4:a.length}),[a]);return Object(E.jsxs)(ue,{id:"room",children:[Object(E.jsx)(be,{roomId:e}),n?Object(E.jsxs)(ce.a,{h:"100%",color:"white",direction:"column",children:[Object(E.jsx)(x.a,{flex:"2",children:Object(E.jsxs)(ce.a,{h:"100%",color:"white",direction:"row",children:[Object(E.jsx)(x.a,{w:"100%",padding:"10px",bg:"#202123",children:Object(E.jsx)(ce.a,{h:"100%",alignItems:"center",justifyContent:"center",children:Object(E.jsx)(oe.a,{templateColumns:"repeat(".concat(j,", 1fr)"),gap:3,alignItems:"center",children:a.map((function(e,t){var n=e.userId,c=e.nickName,o=Object(T.a)(r,{userId:n});return Object(E.jsx)(xe,{stream:null===o||void 0===o?void 0:o.stream,videoEnabled:!!(null===o||void 0===o?void 0:o.videoEnabled),audioEnabled:!!(null===o||void 0===o?void 0:o.audioEnabled),nickName:c},t)}))})})}),Object(E.jsx)(x.a,{w:"450px",h:"100%",bg:"#202123",children:Object(E.jsx)(Oe,{})})]})}),Object(E.jsx)(x.a,{h:"80px",bg:"black",children:Object(E.jsx)(ce.a,{h:"100%",color:"white",justifyContent:"center",alignItems:"center",children:Object(E.jsxs)(v.a,{spacing:4,children:[Object(E.jsx)(ae.a,{label:"\uce74\uba54\ub77c","aria-label":"\uce74\uba54\ub77c",children:Object(E.jsx)(re.a,{borderRadius:"5px",colorScheme:"whiteAlpha","aria-label":"button",fontSize:"22px",icon:(null===s||void 0===s?void 0:s.videoEnabled)?Object(E.jsx)(ie.a,{as:de.a}):Object(E.jsx)(ie.a,{as:de.b}),onClick:u})}),Object(E.jsx)(ae.a,{label:"\ub9c8\uc774\ud06c","aria-label":"\ub9c8\uc774\ud06c",children:Object(E.jsx)(re.a,{borderRadius:"5px",colorScheme:"whiteAlpha","aria-label":"button",fontSize:"22px",icon:(null===s||void 0===s?void 0:s.audioEnabled)?Object(E.jsx)(ie.a,{as:le.a}):Object(E.jsx)(ie.a,{as:le.b}),onClick:b})}),Object(E.jsx)(ae.a,{label:"\ub098\uac00\uae30","aria-label":"\ub098\uac00\uae30",children:Object(E.jsx)(re.a,{borderRadius:"5px",colorScheme:"red","aria-label":"button",icon:Object(E.jsx)(se.a,{}),onClick:f})})]})})})]}):Object(E.jsx)(ce.a,{h:"100%",color:"white",direction:"column",children:Object(E.jsx)(pe,{roomId:e})})]})}),Ie="".concat("picasso"),ye=function(){return Object(E.jsx)(i.a,{store:h,children:Object(E.jsx)(d.a,{children:Object(E.jsx)(s.a,{basename:Ie,children:Object(E.jsxs)(l.d,{children:[Object(E.jsx)(l.b,{exact:!0,path:"/",component:R}),Object(E.jsx)(l.b,{path:"/room/:roomId",component:ke}),Object(E.jsx)(l.a,{to:"/"})]})})})})};n(207);r.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(ye,{})}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.cc42a4ee.chunk.js.map
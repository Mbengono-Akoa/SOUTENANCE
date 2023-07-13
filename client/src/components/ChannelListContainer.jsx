import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';


import { ChannelSearch, TeamChannelList, TeamChannelPreview, VideoCall } from './';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import VideoIcon from '../assets/video.png'
import Tv from '../assets/tv.png'
import PDFIC from '../assets/pdfI.png' 
import { Link } from 'react-router-dom';

const cookies = new Cookies();


const SideBar = ({ logout, video}) => (
    <div className="channel-list__sidebar">
        {/* <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>

        <div className="channel-list__sidebar__icon3">
            <div className="icon3__inner"  onClick={video}>
                <img src={VideoIcon} alt="" width="30" />
            </div>
        </div>

        <div className="channel-list__sidebar__icon4">
            <div className="icon4__inner" >
                <img src={Tv} alt="" width="30" />
            </div>
        </div>

        <div className="channel-list__sidebar__icon5">
            <div className="icon5__inner" >
                <img src={PDFIC} alt="" width="30" />
            </div>
        </div> */}

        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
       
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Campus Book</p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const video = () => (
        
        <Link to="/videoCall"> 
            <VideoCall/>
        </Link>
    )

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} video={video} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            
            </div>
        </>
    )

}

export default ChannelListContainer;

























// import React, { useState } from 'react'
// import { ChannelList, useChatContext } from 'stream-chat-react';
// import Cookies from 'universal-cookie';
// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
// import HospitalIcon from '../assets/hospital.png';
// import LogoutIcon from '../assets/logout.png';
// import { initialState } from 'stream-chat-react/dist/components/Channel/channelState';


// const cookies = new Cookies();
// const SideBar = ({ logout }) => (
//     <div className="channel-list__sidebar">
//         <div className="channel-list__sidebar__icon1">
//             <div className="icon1__inner">
//                 <img src={HospitalIcon} alt="Hospital" width="30"/>
//             </div>
//         </div>

//         <div className="channel-list__sidebar__icon2">
//             <div className="icon1__inner" onClick={logout}>
//                 <img src={LogoutIcon} alt="Logout" width="30"/>
//             </div>
//         </div>
//     </div>

    
// )

// const CompanyHeader = () => (
//     <div className="channel-list__header">
//         <p className="channel-list__header__text">CampusBook</p>
//     </div>
// )

// const customChannelTeamFilter = (channels) => {
//     return channels.filter((channel) => channel.type === 'team');
// }

// const customChannelMessagingFilter = (channels) => {
//     return channels.filter((channel) => channel.type === 'messaging');
// }


// const ChannelListContent = ({ isCreating,setIsCreating, setCreateType,setIsEditing, setToggleContainer }) => {
//     const { client } = useChatContext();

//     const logout = () => {
//        cookies.remove("token"); 
//        cookies.remove('userId');
//        cookies.remove('username');
//        cookies.remove('fullName');
//        cookies.remove('avatarURL');  
//        cookies.remove('hashedPassword');
//        cookies.remove('phoneNumber');

//        window.location.reload();
//     }

//     const filters = { members: { $in: [client.userID] } }

//   return (
//     <>
//         <SideBar logout={logout}/>
//         <div className="channel-list__list__wrapper"> 
//         <CompanyHeader/>
//         <ChannelSearch setToggleContainer={setToggleContainer}/>
//         <ChannelList
//             filters={filters}
//             channelRenderFilterFn={customChannelTeamFilter}
//             List={(listProps) => (
//                 <TeamChannelList
//                     {... listProps}
//                     type="team"
//                     isCreating={isCreating}
//                     setIsCreating={setIsCreating}
//                     setCreateType={setCreateType} 
//                     setIsEditing={setIsEditing}
//                     setToggleContainer={setToggleContainer}
                    
//                 />
//             )}
//             Preview={(previewProps) => (
//                 <TeamChannelPreview
//                     {... previewProps}
//                         setIsCreating={setIsCreating}
//                         setIsEditing={setIsEditing}
//                         setToggleContainer={setToggleContainer}
//                     type="team"
//                 />
//             )}
//         />
//              <ChannelList 
//                     filters={filters}
//                     channelRenderFilterFn={customChannelMessagingFilter}
//                     List={(listProps) => (
//                         <TeamChannelList 
//                             {...listProps}
//                             type="messaging"
//                             isCreating={isCreating}
//                             setIsCreating={setIsCreating}
//                             setCreateType={setCreateType} 
//                             setIsEditing={setIsEditing}
//                             setToggleContainer={setToggleContainer}
                
//                         />
//                     )}
//                     Preview={(previewProps) => (
//                         <TeamChannelPreview 
//                             {...previewProps}
//                             setIsCreating={setIsCreating}
//                             setIsEditing={setIsEditing}
//                             setToggleContainer={setToggleContainer}
//                             type="messaging"
//                         />
//                     )}
//                 />
//         </div>
//     </>
//   )
// }

// const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
//     const [toggleContainer, setToggleContainer] = useState(false)

//     return(
//         <>
//         <div className="channel-list__container">
//             <ChannelListContent 
//                 setIsCreating={setIsCreating}
//                 setCreateType={setCreateType}
//                 setIsEditing={setIsEditing}
//             />
//         </div>

//         <div className="channel-list__container-responsive"
//              style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff" }}
//              >
//                 <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
//                 </div>
//                 <ChannelListContent
//                 setIsCreating={setIsCreating}
//                 setCreateType={setCreateType}
//                 setIsEditing={setIsEditing}  
//                 setToggleContainer={setToggleContainer}
//                 />
//         </div>
//         </>
//     )  
// }

// export default ChannelListContainer
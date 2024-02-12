import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { HR } from '../../component/htmlModify';
import { Divider } from 'primereact/divider';
import { TabView, TabPanel } from 'primereact/tabview';

// const itemRenderer = (item) => (
//     <a className="flex align-items-center p-menuitem-link">
//         <span className={item.icon} />
//         <span className="mx-2">{item.label}</span>
//         {item.badge && <Badge className="ml-auto" value={item.badge} />}
//         {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
//     </a>
// );

// const profileItems = [
//     {
//         label: 'Documents',
//         items: [
//             {
//                 label: 'New',
//                 icon: 'pi pi-plus'
//             },
//             {
//                 label: 'Search',
//                 icon: 'pi pi-search'
//             }
//         ]
//     },
//     {
//         label: 'Profile',
//         items: [
//             {
//                 label: 'Settings',
//                 icon: 'pi pi-cog'
//             },
//             {
//                 label: 'Logout',
//                 icon: 'pi pi-sign-out'
//             }
//         ]
//     }
// ];


export const Header = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Donasi Sekarang',
            command: () => {
                navigate('/donasi');
            }
        },
        {
            label: 'Profil',
            command: () => {
                navigate('/profil');
            }
        },
        {
            label: 'Layanan',
            items: [
                {
                    label: 'Laporan Tahunan',
                },
                {
                    label: 'Rekening',
                },
                {
                    label: 'Konfirmasi',
                },
            ]
        },
        {
            label: 'Blog',
            command: () => {
                navigate('/blog');
            },
            items: [
                {
                    label: 'Berita',
                },
                {
                    label: 'Kegiatan',
                }
            ]
        },
        {
            label: 'Program',
            command: () => {
                navigate('/blog');
            }
        }
    ];
    
    const [loginAssign, setLoginAssign] = useState(null);
    const [loginDialog, setLoginDialog] = useState(false);
    const [registerDialog, setRegisterDialog] = useState(false);
    const toast = useRef(null); 
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const loginAction = () => {
        if (username === 'admin' && password === 'admin') {
            setLoginAssign(true);
            console.log('test')
            setLoginDialog(false);
        }

    }

    const start = <><div style={{ paddingLeft: '135px' }}></div><img alt="logo" src="lentera-ungu.png" height="150" className="mr-2" style={{
        position: 'absolute', top: '-25px', left: '-5px'
    }}></img></>;
    const end = () => {
        return (
            <div className="flex align-items-center gap-2">
                <span>
                    <InputText placeholder="Search" type="text" style={{ width: "20rem" }} />
                </span>
                {loginAssign ?
                    <span>
                        <span><Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" /></span>
                        <span>Akhi Fauzan</span>
                    </span>
                    : <span>
                        <span style={{ cursor: 'pointer' }} onClick={() => setLoginDialog(true)}>Masuk</span>
                        <span style={{ padding: '1em' }}>/</span>
                        <span >Register</span>
                    </span>
                }
            </div>
        )
    };

    return (
        <div style={{ "positition": "relative", "marginTop": "7em" }}>
            <div className="card" style={{
                position: 'fixed',
                zIndex: '1',
                width: 'auto!important',
                top: '0',
                left: '0',
                right: '0'
            }}>
                <Menubar model={items} start={start} end={end} style={{ border: 'none', borderRadius: '0px', background: 'black', color: 'white' }} />
                {/* <Menu model={profileItems} style={{ position: 'absolute', right: '0' }} /> */}

                <Dialog
                    visible={loginDialog}
                    modal
                    onHide={() => setLoginDialog(false)}
                    content={({ hide }) => (
                        <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                            <img alt="logo" src="lentera-ungu.png" height="150"></img>
                            <div className="inline-flex flex-column gap-2">
                                <label htmlFor="username" className="text-primary-50 font-semibold">
                                    Username
                                </label>
                                <InputText id="username" value={username} label="Username" onChange={(e) => setUsername(e.target.value)} className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                            </div>
                            <div className="inline-flex flex-column gap-2">
                                <label htmlFor="Password" className="text-primary-50 font-semibold">
                                    Password
                                </label>
                                <InputText id="Password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"></InputText>
                            </div>
                            <div className="flex align-items-center gap-2">
                                <Button label="Sign-In" onClick={(e) => loginAction()} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                                <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            </div>
                            {/* <Divider align="center"> */}
                            <span className="p-tag" style={{ "textAlign": "center" }}>Login With</span>
                            <div className="flex align-items-center gap-2">
                                <Button label="Google" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                                <Button label="Facebook" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            </div>
                            {/* </Divider> */}
                        </div>
                    )}
                ></Dialog>


            </div>
        </div>
    )
}
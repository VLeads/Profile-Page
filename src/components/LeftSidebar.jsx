import React, {useState} from 'react';
import {Avatar, Button, Card, Tab, Tabs } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const LeftSidebar = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Card variant="outlined" className='p-3'>
            <div class="back-to flex ml-2" data-first-child=""><button class="bg-white hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm"><ChevronLeftIcon /></button><div class="font-main font-medium text-black mt-1 mx-3">Back to leads</div></div>

            <div className='grid justify-items-center m-4 mt-12'>
                <Avatar
                    sx={{ width: 110, height: 110 }}
                    alt="Remy Sharp" src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />

                <span class="text-2xl font-main font-semibold text-black mt-2">Jerome Bell</span>

                <a href="#" class="google-link flex items-center space-x-1.5 mt-1"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png" class="w-3.5 h-3.5" /><span class="text-s font-main font-normal gray">Google</span></a>

                <div class="flex flex-nowrap items-center space-x-5 mt-6 mb-6">
                    <div class="log-button grid items-center">
                        <button class="bg-gray-50 hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium m-1 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></button><span class="m-1 ml-1.5 text-sm font-main font-normal text-gray-600">Log</span></div><div class="log-button grid items-center">
                        <button class="bg-gray-50 hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9 ml-1">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium m-1 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MailOutlineIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
                        </button>
                        <span class="m-1 text-sm font-main font-normal text-gray-600">Email</span>
                    </div>
                    <div class="log-button grid items-center"><button class="bg-gray-50 hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium m-1 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallOutlinedIcon"><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path></svg>
                    </button>
                        <span class="m-1 ml-1.5 text-sm font-main font-normal text-gray-600">Call</span></div><div class="log-button grid items-center">
                        <button class="bg-gray-50 hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium m-1 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreHorizOutlinedIcon"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></button><span class="m-1 text-sm font-main font-normal text-gray-600">More</span>
                    </div>
                </div>

                <Button style={{
                    backgroundColor: '#FF5F2E',
                    padding: "13px 36px",
                    fontSize: "11px",
                    width: '68%',
                    borderRadius: '8px'
                }} variant="contained">Convert to contact</Button>

                <div class="mt-2 flex flex-nowrap items-center"><span class="text-green-400 text-3xl text-bold mt-0.5 mr-0.5">•</span><span class="text-sm font-main font-normal text-gray-600 ml-0.5 tracking-wider">Last activity : 2 Jan 2020 at 09:00 AM</span></div>
                <div>
                    <Tabs
                        value={value}
                        textColor="black"
                        onChange={handleChange}
                        aria-label="basic tabs example">
                        <Tab label="Leads Info" value='1' />
                        <Tab style={{ color: 'gray' }} label="Address Info" value='2' />
                    </Tabs>
                </div>
            </div>
            <div class="m-4 ml-8" data-last-child="">
                <div class="grid space-y-2"><span class="text-main text-sm tracking-wide font-light gray">Email</span>
                    <span class="text-main tracking-wide text-sm text-black">emailkuyahut@gmail.com</span></div>
                <div class="grid space-y-2 mt-4"><span class="text-main text-sm tracking-wide font-light gray">Phone</span>
                    <span class="text-main tracking-wide text-sm text-black">(405) 555-0128</span></div><div class="grid space-y-2 mt-4">
                    <span class="text-main text-sm tracking-wide font-light gray">Lead Owner</span><span class="text-main tracking-wide text-sm text-black">Esther Howard</span>
                </div>
                <div class="grid space-y-2 mt-4">
                    <span class="text-main text-sm tracking-wide font-light gray">Job Title</span>
                    <span class="text-main tracking-wide text-sm text-black">Content Writer</span></div>
                <div class="grid space-y-2 mt-4"><span class="text-main text-sm tracking-wide font-light gray">Annual Revenue</span>
                    <span class="text-main tracking-wide text-sm text-black">$ 5,000</span></div><div class="grid space-y-2 mt-4">
                    <span class="text-main text-sm tracking-wide font-light text-light-grey">Lead Source</span><span class="text-main tracking-wide text-sm text-black">Online Store</span></div>
            </div>

        </Card>
    )
}

export default LeftSidebar
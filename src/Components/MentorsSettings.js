'use client'
import React, {useState} from "react"
import MentorsSettingsComps from "./MentorsSettingsComps"

function MentorsSettings() {
  const [mentorship, setMentorship] = useState({
    profile: true,
    personalInfo: false,
    login: false,
    notification: false
})

function displayProfile(){
    setMentorship({
       profile: true, personalInfo: false, login: false, notification: false
    })
}

function displayPersonalInfo(){
    setMentorship({
      profile: false, personalInfo: true, login: false, notification: false
    })
}

function displayLogin(){
    setMentorship({
      profile: false, personalInfo: false, login: true, notification: false
    })
}

function displayNotification(){
  setMentorship({
    profile: false, personalInfo: false, login: false, notification: true
  })
}
  return (
    <section>
      <h4>Settings</h4>

      <ul className="flex items-center mt-10 mb-12 w-10/12 justify-between">
            <li className={`relative cursor-pointer group ${mentorship.profile ? 'text-[#0F88D9]' : ''}`} onClick={displayProfile}>
                <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] ${mentorship.profile ? 'w-full' : 'w-0'} absolute left-0 -bottom-[3px]`}></div>Mentorship Profile
            </li>

            <li className={`relative cursor-pointer group ${mentorship.personalInfo ? 'text-[#0F88D9]' : ''}`}  onClick={displayPersonalInfo}>
                <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentorship.personalInfo ? 'w-full' : 'w-0'}`}></div> Personal Info
            </li>

            <li className={`relative cursor-pointer group ${mentorship.login ? 'text-[#0F88D9]' : ''}`} onClick={displayLogin}>
                <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentorship.login ? 'w-full' : 'w-0'}`}></div>Login and security
            </li>

            <li className={`relative cursor-pointer group ${mentorship.notification ? 'text-[#0F88D9]' : ''}`} onClick={displayNotification}>
                <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentorship.notification ? 'w-full' : 'w-0'}`}></div>Message and Notification
            </li>
        </ul>

        <div>
          <MentorsSettingsComps />
        </div>
    </section>
  )
}

export default MentorsSettings
import Header from './utils/Header';
import { Button } from './ui/button';
import resume from '../assets/DylanHarden.pdf'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

    return (
        <>
            <section id="Home" className="h-screen">
                <div className="section-container flex-col justify-center md:flex-row md:flex md:justify-between items-center pt-24 md:pt-32">
                    <div className="text-center md:text-left">
                        <h4 className="text-xl sm:text-2xl">Howdy, my name is</h4>
                        <Header text="Dylan Harden." />
                        <h4 className="text-center my-4 md:my-2 md:text-left text-xl sm:text-2xl lg:text-3xl lg:pb-4 max-w-[90%] sm:max-w-[70%] mx-auto md:mx-0">
                            I'm a CS grad from Texas A&M who is interested in building real world AI systems.
                        </h4>
                        <div className="mt-4 flex flex-col sm:flex-row items-center max-w-fit md:max-w-none mx-auto w-100">
                            <a href={resume} download='DylanHarden.pdf'>
                                <Button asChild className='w-36 h-10 sm:w-44 sm:h-12 text-md sm:text-xl'>
                                    <p>Resume</p>
                                </Button>
                            </a>
                            <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-8">
                                <a className='w-100 h-100' href='https://www.linkedin.com/in/dylan-harden/' target='_blank'>
                                    <Button size="icon" variant="outline" aria-label="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </Button>
                                </a>
                                <a href='https://github.com/Dylan-Harden3' target='_blank'>
                                    <Button size="icon" variant="outline" aria-label="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </Button>
                                </a>
                                <a href='https://leetcode.com/u/DylanHarden3/' target='_blank'>
                                    <Button size="icon" variant="outline" aria-label="LeetCode">
                                        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" role="img" stroke="currentColor" stroke-width="0.25" xmlns="http://www.w3.org/2000/svg"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" /></svg>
                                    </Button>
                                </a>
                                <a href="https://www.strava.com/athletes/103794691" target="_blank">
                                    <Button size="icon" variant="outline" aria-label="Strava">
                                        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" role="img" stroke="currentColor" stroke-width="0.25" xmlns="http://www.w3.org/2000/svg"><title>Strava icon</title><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" /></svg>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-80 hidden md:block'>
                        <svg width="300" height="398" viewBox="0 0 400 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M226.069 344.596C226.069 344.596 163.991 366.2 151.585 372.337C133.433 381.317 94.4836 450.169 94.4836 450.169L82.7608 399.653C82.7608 399.653 76.7103 400.027 73.3069 400.775C69.9035 401.524 58.1808 406.388 50.6177 410.504C43.0546 414.621 38.1386 424.724 38.1386 424.724C38.1386 424.724 54.0211 501.807 58.1808 513.407C62.3405 525.007 72.1725 526.13 80.1137 526.13C88.0549 526.13 109.988 507.42 109.988 507.42L158.013 462.891L169.358 526.757H392.974C392.974 421.452 380.432 370.924 363.415 366.06C355.473 363.791 311.172 350.526 292.359 344.886C291.62 344.934 289.239 334.825 289.239 334.825C289.239 334.825 286.855 327.243 262.165 326.737C231.352 326.105 231.009 333.984 231.009 333.984L226.069 344.596Z" fill="#E2ECEF" />
                            <path d="M26.9972 307.611C26.9972 307.611 13.7382 269.049 7.45847 255.979C1.17049 242.897 8.49603 235.442 15.525 240.003C22.5456 244.569 28.9908 251.273 32.8493 267.556C36.7098 283.845 39.195 303.082 39.195 303.082L26.9972 307.611Z" fill="#FCD0B4" />
                            <path d="M70.1813 385.174C70.1813 385.174 71.6642 398.714 74.8562 409.497L75.1363 410.218C72.3924 415.352 64.4439 422.455 53.4372 424.955C50.2005 425.694 48.1207 425.704 46.8207 425.506L46.0254 422.979C43.3477 411.777 39.4304 397.755 35.6025 392.652C29.0263 383.883 -5.48974 351.529 5.76153 334.843L7.18904 333.075C7.18904 333.075 7.43602 324.814 13.4877 319.708L15.3265 318.412C15.3265 318.412 24.5652 304.564 40.2669 303.094C55.9615 301.624 70.2508 309.138 67.2329 327.938L69.952 320.675C76.5436 310.078 85.0025 308.47 84.0607 316.732C83.1153 324.989 81.3014 340.238 82.8531 348.401C84.408 356.559 84.0441 377.65 66.5038 387.625" fill="#FCD0B4" />
                            <path d="M65.2535 332.927C65.2535 332.927 61.4719 346.024 53.5307 348.644C53.5307 348.644 46.8597 356.906 34.636 358.484C34.636 358.484 53.2826 366.359 55.3625 373.469C55.3625 373.469 51.9095 351.91 66.7661 346.398L65.2535 332.927Z" fill="#E5A79B" />
                            <path d="M279.312 340.786C279.342 335.122 278.629 321.63 278.629 321.63H238.927C238.927 321.63 238.592 335.871 238.714 339.789C238.714 339.789 243.606 357.57 259.784 357.57C275.956 357.57 279.312 340.786 279.312 340.786Z" fill="#FCD0B4" />
                            <path d="M138.532 186.313C132.104 168.474 133.318 158.236 133.318 158.236L128.204 167.909C104.759 77.4797 154.297 61.093 154.297 61.093C154.297 61.093 134.686 55.106 135.227 36.0221C135.227 36.0221 162.238 42.3834 191.986 25.1705C219.52 9.23593 258.587 -1.66054 298.123 5.80536C333.792 12.5408 340.725 37.5638 340.725 37.5638C340.725 37.5638 376.151 42.596 389.507 80.3445C403.877 120.964 391.776 160.254 391.776 160.254L388.088 149.459C388.088 149.459 387.299 165.481 378.16 186.744L374.254 197.595L143.836 202.583L138.532 186.313Z" fill="#E7D8A7" />
                            <path d="M139.044 187.881L143.836 202.583L150.829 202.43L139.171 187.989C139.145 187.983 139.088 187.92 139.044 187.881ZM389.507 80.3445C376.151 42.596 340.725 37.5638 340.725 37.5638C340.725 37.5638 333.792 12.5408 298.123 5.80536C258.587 -1.66054 219.52 9.23593 191.986 25.1705C162.238 42.3834 135.227 36.0221 135.227 36.0221C134.686 55.106 154.297 61.093 154.297 61.093C154.297 61.093 104.759 77.4797 128.204 167.909L129.037 166.331C128.827 165.397 128.657 164.493 128.582 163.667C121.398 82.8411 166.124 61.3774 166.124 61.3774C166.124 61.3774 170.841 46.5923 200.588 29.3795C228.122 13.4509 264.137 5.494 303.923 11.502C343.082 17.4143 342.764 49.2746 342.764 49.2746C342.764 49.2746 379.951 56.4111 393.489 94.3722C392.472 89.7532 391.177 85.0563 389.507 80.3445Z" fill="#E7D8A7" />
                            <path d="M164.885 252.284C132.742 253.781 118.372 209.899 129.717 194.183C137.901 182.843 154.429 190.133 157.519 196.347" fill="#FCD0B4" />
                            <path d="M156.802 214.036C159.836 222.63 163.743 235.337 157.804 237.393C151.859 239.445 144.585 234.144 141.556 225.549C138.519 216.958 140.876 208.321 146.814 206.271C152.763 204.214 153.769 205.448 156.802 214.036Z" fill="#EDA193" />
                            <path d="M353.961 252.284C386.104 253.781 400.474 209.899 389.129 194.183C380.946 182.843 364.419 190.133 361.327 196.347" fill="#FCD0B4" />
                            <path d="M239.586 316.004H277.997L278.414 335.217C278.414 335.217 257.785 352.299 238.499 342.073L239.224 330.784L239.586 316.004Z" fill="#E5A79B" />
                            <path d="M197.994 94.6925C159.591 104.125 157.7 167.909 157.7 167.909C156.826 201.906 158.374 260.341 179.255 282.594C199.997 304.696 220.096 315.523 237.869 320.761C237.869 320.761 259.802 327.997 280.979 320.761C298.752 315.523 318.85 304.696 339.591 282.594C362.35 258.344 362.15 190.564 360.867 159.476C360.489 150.268 355.374 139.736 353.144 137.111C320.683 98.8865 320.777 75.2555 320.777 75.2555L316.209 80.6887C307.838 88.9629 292.429 97.1981 264.236 101.299C264.236 101.299 274.323 67.3765 282.387 61.3894C282.387 61.3894 247.096 105.79 189.617 116.267C189.617 116.267 191.424 108.571 196.115 98.5213L197.994 94.6925Z" fill="#FCD0B4" />
                            <path d="M230.469 141.94C229.222 142.975 225.924 140.925 221.169 138.057C216.47 135.246 209.915 131.693 203.685 132.585C197.412 133.321 192.024 138.32 188.815 142.272C185.474 146.28 184.215 149.319 182.655 149.459C181.89 149.504 181.037 148.513 180.695 146.538C180.356 144.583 180.561 141.754 181.68 138.56C182.803 135.375 184.801 131.759 188.128 128.442C191.4 125.161 196.304 122.137 202.214 121.401C208.123 120.617 213.641 122.317 217.6 124.583C221.636 126.861 224.48 129.63 226.528 132.1C230.58 137.114 231.626 140.994 230.469 141.94Z" fill="#111A20" />
                            <path d="M288.38 141.94C287.222 140.994 288.268 137.114 292.32 132.1C294.368 129.63 297.213 126.861 301.249 124.583C305.206 122.317 310.724 120.617 316.635 121.401C322.544 122.137 327.448 125.161 330.721 128.442C334.046 131.759 336.045 135.375 337.168 138.56C338.287 141.754 338.49 144.583 338.151 146.538C337.812 148.513 336.953 149.504 336.188 149.459C334.63 149.319 333.374 146.28 330.031 142.272C326.824 138.32 321.437 133.321 315.162 132.585C308.933 131.693 302.376 135.246 297.68 138.057C292.922 140.925 289.627 142.975 288.38 141.94Z" fill="#111A20" />
                            <path d="M210.607 223.403C210.607 227.507 201.277 230.829 189.77 230.829C178.26 230.829 168.93 227.507 168.93 223.403C168.93 219.305 178.26 215.985 189.77 215.985C201.277 215.985 210.607 219.305 210.607 223.403Z" fill="#FCD0B4" />
                            <path d="M351.855 223.403C351.855 227.507 342.525 230.829 331.018 230.829C319.506 230.829 310.177 227.507 310.177 223.403C310.177 219.305 319.506 215.985 331.018 215.985C342.525 215.985 351.855 219.305 351.855 223.403Z" fill="#FCD0B4" />
                            <path d="M362.044 214.036C359.01 222.63 355.104 235.337 361.043 237.393C366.988 239.445 374.26 234.144 377.291 225.549C380.329 216.958 377.972 208.321 372.034 206.271C366.083 204.214 365.079 205.448 362.044 214.036Z" fill="#EDA193" />
                            <path d="M241.416 56.5758C241.416 56.5758 206.009 64.8349 191.484 115.022L203.481 112.63C203.481 112.63 215.365 74.8423 241.416 56.5758Z" fill="#E7D8A7" />
                            <path d="M291.44 57.2733C291.44 57.2733 276.228 60.4015 266.104 100.305L276.063 98.6799C276.063 98.6799 279.466 70.7442 291.44 57.2733Z" fill="#E7D8A7" />
                            <path d="M235.157 395.415L250.283 372.589L268.819 371.239L282.804 392.048C282.804 392.048 252.174 380.822 235.157 395.415Z" fill="#ADD8E7" />
                            <path d="M235.021 526.757L254.945 387.093L250.537 371.239L259.105 359.366H261.374L268.819 371.239L263.072 387.093L284.626 526.757" fill="#213F84" />
                            <path d="M279.204 323.684C279.204 323.684 279.448 334.538 280.187 339.661C280.187 339.661 273.644 353.79 259.63 357.906C245.618 353.79 238.531 339.782 238.531 339.782C238.899 333.804 239.023 323.684 239.023 323.684" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M284.718 525.612L263.363 386.845L269.057 371.093" stroke="#111A20" stroke-width="5.43999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M250.407 371.093L254.688 386.812L235.335 526.273" stroke="#111A20" stroke-width="5.43999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M259.678 357.906L234.578 394.918C234.578 394.918 227.393 385.228 225.094 361.369C224.521 355.4 225.071 346.659 227.968 338.909C230.844 331.233 237.128 329.17 238.885 328.673" stroke="#111A20" stroke-width="5.43999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M259.678 357.906L284.778 394.918C284.778 394.918 291.963 385.228 294.261 361.369C294.834 355.4 294.285 346.659 291.386 338.909C288.512 331.233 282.229 329.17 280.47 328.673" stroke="#111A20" stroke-width="5.43999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M224.521 345.165C199.525 351.706 148.262 370.663 137.311 383.236C128.726 393.088 95.0687 449.814 95.0687 449.814" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M46.5857 426.473C47.2615 430.187 42.3918 402.051 35.274 392.568C28.5205 383.557 -7.70787 349.676 6.45046 333.434C18.2631 319.894 46.8846 321.888 49.7443 329.427C52.5121 336.727 53.2424 352.646 44.8401 355.511C36.4369 358.376 25.8971 360.061 27.5054 352.829C29.0984 345.596 39.1881 342.252 39.1881 342.252L25.1478 344.192" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.86053 332.991C6.86053 332.991 7.2186 320.963 17.7112 316.964C28.2014 312.963 47.9352 311.128 54.5647 316.964C59.4051 321.237 68.2739 341.303 52.0229 349.53" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M67.5224 352.717C67.5224 352.717 63.0199 331.183 69.6246 320.588C76.2151 309.994 84.6752 308.386 83.7334 316.649C82.788 324.904 80.9741 340.151 82.5245 348.314C84.0795 356.471 83.7168 377.564 66.1753 387.538" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M66.2591 344.75C66.2591 344.75 51.3964 354.197 55.5999 373.846" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.9991 318.324C14.9991 318.324 24.2367 304.474 39.9395 303.007C55.6341 301.54 69.9226 309.054 66.9055 327.85" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.6699 307.527C26.6699 307.527 13.4109 268.962 7.12996 255.894C0.843147 242.809 8.1687 235.354 15.1965 239.915C22.2171 244.485 28.6623 251.187 32.5207 267.471C36.3825 283.76 38.8665 302.995 38.8665 302.995" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M69.8539 385.09C69.8539 385.09 71.3357 398.626 74.5288 409.412" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M73.0707 400.363C77.2113 398.843 82.6474 399.555 82.6474 399.555C82.6474 399.555 95.9348 462.266 99.7163 480.227" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M44.046 416.295C44.046 416.295 36.9037 423.012 37.1566 425.207C37.4095 427.404 50.4807 492.923 55.4723 506.421C61.1446 521.762 66.2591 527.909 82.3 524.792C102.923 520.781 158.013 461.395 158.013 461.395" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M40.7857 426.473C40.7857 426.473 45.4439 428.041 52.3832 426.221C69.5254 421.73 79.8702 409.443 79.8632 404.77" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M230.418 186.436C230.418 200.041 221.874 211.069 211.337 211.069C200.796 211.069 192.245 200.041 192.245 186.436C192.245 172.83 200.796 161.802 211.337 161.802C221.874 161.802 230.418 172.83 230.418 186.436Z" fill="white" />
                            <path d="M227.444 189.992C227.444 199.26 222.172 206.774 215.676 206.774C209.177 206.774 203.91 199.26 203.91 189.992C203.91 180.721 209.177 173.21 215.676 173.21C222.172 173.21 227.444 180.721 227.444 189.992Z" fill="#111A20" />
                            <path d="M227.236 184.373C227.236 186.271 225.683 187.813 223.763 187.813C221.841 187.813 220.281 186.271 220.281 184.373C220.281 182.475 221.841 180.933 223.763 180.933C225.683 180.933 227.236 182.475 227.236 184.373Z" fill="white" />
                            <path d="M213.206 169.992C218.033 169.992 222.636 170.86 226.885 172.384C223.068 166.882 217.537 163.397 211.369 163.397C204.396 163.397 198.245 167.831 194.458 174.605C199.983 171.689 206.376 169.992 213.206 169.992Z" fill="#D8E5F6" />
                            <path d="M228.33 172.156C220.996 156.85 192.221 155.506 191.126 185.681" stroke="#111A20" stroke-width="7.25332" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M287.801 186.436C287.801 200.041 296.345 211.069 306.882 211.069C317.422 211.069 325.974 200.041 325.974 186.436C325.974 172.83 317.422 161.802 306.882 161.802C296.345 161.802 287.801 172.83 287.801 186.436Z" fill="white" />
                            <path d="M290.775 189.992C290.775 199.26 296.046 206.774 302.542 206.774C309.042 206.774 314.309 199.26 314.309 189.992C314.309 180.721 309.042 173.21 302.542 173.21C296.046 173.21 290.775 180.721 290.775 189.992Z" fill="#111A20" />
                            <path d="M307.115 184.373C307.115 186.271 308.67 187.813 310.591 187.813C312.509 187.813 314.07 186.271 314.07 184.373C314.07 182.475 312.509 180.933 310.591 180.933C308.67 180.933 307.115 182.475 307.115 184.373Z" fill="white" />
                            <path d="M304.761 169.992C299.934 169.992 295.331 170.86 291.082 172.384C294.899 166.882 300.43 163.397 306.598 163.397C313.571 163.397 319.721 167.831 323.509 174.605C317.985 171.689 311.592 169.992 304.761 169.992Z" fill="#D8E5F6" />
                            <path d="M289.889 172.156C297.221 156.85 325.996 155.506 327.094 185.681" stroke="#111A20" stroke-width="7.25332" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M325.751 56.8991C325.751 56.8991 332.808 91.3218 264.236 101.299C264.236 101.299 274.323 67.3764 282.387 61.3894C282.387 61.3894 247.096 105.79 189.617 116.267C189.617 116.267 199.699 73.3606 233.983 57.8929" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M257.785 218.978C257.785 218.978 244.928 223.969 246.188 229.956C247.451 235.942 251.988 242.678 251.988 242.678" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M251.483 195.778C251.483 195.778 255.261 212.743 254.257 220.227" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M164.885 252.284C132.742 253.781 118.372 209.899 129.717 194.183C137.901 182.843 154.429 190.133 157.519 196.347" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M158.85 215.985C158.85 215.985 148.081 194.186 135.88 204.409" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M353.961 252.284C386.104 253.781 400.474 209.899 389.129 194.183C380.946 182.843 364.419 190.133 361.327 196.347" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M359.999 215.985C359.999 215.985 370.766 194.186 382.967 204.409" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M320.777 75.2555C320.777 75.2555 320.683 98.8865 353.144 137.111C355.374 139.736 360.489 150.268 360.867 159.476C362.15 190.564 362.35 258.344 339.591 282.594C318.85 304.696 298.752 315.523 280.979 320.761C259.802 327.997 237.869 320.761 237.869 320.761C220.096 315.523 199.997 304.696 179.255 282.594C158.374 260.341 156.826 201.906 157.7 167.909C157.7 167.909 159.591 104.125 197.994 94.6925" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M136.042 152.908C131.864 161.185 128.204 167.909 128.204 167.909C104.759 77.4797 154.297 61.093 154.297 61.093C154.297 61.093 134.686 55.106 135.227 36.0221C135.227 36.0221 162.238 42.3834 191.986 25.1706C219.52 9.23594 258.587 -1.66053 298.123 5.80536C333.792 12.5408 340.725 37.5638 340.725 37.5638C340.725 37.5638 376.151 42.596 389.507 80.3445C403.877 120.964 391.776 160.254 391.776 160.254C391.776 160.254 388.503 150.22 384.437 139.458" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M133.318 158.236C133.318 158.236 132.104 168.474 138.532 186.313" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M388.089 149.459C388.089 149.459 387.299 165.481 378.16 186.744" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M230.469 141.94C229.222 142.975 225.924 140.925 221.169 138.057C216.47 135.246 209.915 131.693 203.685 132.585C197.412 133.321 192.024 138.32 188.815 142.272C185.474 146.28 184.215 149.319 182.655 149.459C181.89 149.504 181.037 148.513 180.695 146.538C180.356 144.583 180.561 141.754 181.68 138.56C182.803 135.375 184.801 131.759 188.128 128.442C191.4 125.161 196.304 122.137 202.214 121.401C208.123 120.617 213.641 122.317 217.6 124.583C221.636 126.861 224.48 129.63 226.528 132.1C230.58 137.114 231.626 140.994 230.469 141.94Z" fill="#111A20" />
                            <path d="M288.38 141.94C287.222 140.994 288.268 137.114 292.32 132.1C294.368 129.63 297.213 126.861 301.249 124.583C305.206 122.317 310.724 120.617 316.635 121.401C322.544 122.137 327.448 125.161 330.721 128.442C334.046 131.759 336.045 135.375 337.168 138.56C338.287 141.754 338.49 144.583 338.151 146.538C337.812 148.513 336.953 149.504 336.188 149.459C334.63 149.319 333.374 146.28 330.031 142.272C326.824 138.32 321.437 133.321 315.162 132.585C308.933 131.693 302.376 135.246 297.68 138.057C292.922 140.925 289.627 142.975 288.38 141.94Z" fill="#111A20" />
                            <path d="M294.055 344.312C313.341 350.988 357.516 364.369 363.415 366.06C380.432 370.924 392.974 420.955 392.974 526.26" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M368.297 411.822L348.289 526.385" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M150.964 420.605L169.441 526.385" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M259.802 305.297C238.879 305.297 220.728 255.903 220.728 255.903C228.793 259.645 246.694 262.387 259.552 262.387H259.3C272.157 262.387 290.054 259.645 298.123 255.903C298.123 255.903 279.972 305.297 259.046 305.297H259.802Z" fill="#ED5D84" />
                            <path d="M230.495 277.159C238.415 272.83 247.999 270.283 258.343 270.283C269.419 270.283 279.605 273.227 287.827 278.133C294.167 266.658 298.123 255.903 298.123 255.903C290.082 259.634 272.275 262.366 259.424 262.384C246.578 262.366 228.77 259.634 220.728 255.903C220.728 255.903 224.468 266.059 230.495 277.159Z" fill="#D54851" />
                            <path d="M259.802 305.297C238.879 305.297 220.728 255.903 220.728 255.903C228.793 259.645 246.694 262.387 259.552 262.387H259.3C272.157 262.387 290.054 259.645 298.123 255.903C298.123 255.903 279.972 305.297 259.046 305.297H259.802Z" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M254.945 387.093C254.945 387.093 259.453 385.107 262.969 386.874" stroke="#111A20" stroke-width="5.43999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M42.6162 447.488C42.6162 447.488 60.6436 453.914 82.6059 435.08" stroke="#111A20" stroke-width="6.34666" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Home 
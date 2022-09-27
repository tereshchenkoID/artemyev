import styles from './index.module.scss'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import Category from "../../Components/Category";
import Social from "../../Components/Social";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const SectionResume = () => {
  return (
      <section id={'section-2'} className={styles.block}>
          <div className={styles.left}>
              <div className={styles.section}>
                  <div className={styles.body}>
                      <h2>artemyev alexandr</h2>
                  </div>
              </div>
              <div className={styles.section}>
                  <div className={styles.subtitle}>
                      <div>
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M16.1094 0C16.1094 8.62413 9.00889 15.6154 0.25 15.6154C9.00889 15.6154 16.1094 22.6066 16.1094 31.2308C16.1094 22.6066 23.2099 15.6154 31.9688 15.6154C23.2099 15.6154 16.1094 8.62413 16.1094 0Z" fill="#24262D"/>
                          </svg>
                      </div>
                      <div>
                        <p>Lead Graphic Designer</p>
                      </div>
                      <div>
                          <svg width="88" height="81" viewBox="0 0 88 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="44" cy="40.6859" rx="43" ry="39.281" stroke="#24262D"/>
                              <path d="M43.7358 1.40491C8.12088 1.40491 7.59711 79.9669 43.7358 79.9669" stroke="#24262D"/>
                              <path d="M43.7363 1.40491C79.3512 1.40491 79.875 79.9669 43.7363 79.9669" stroke="#24262D"/>
                              <path d="M87 41.0909C87 67.8908 1.52761 68.2849 1.52761 41.0909" stroke="#24262D"/>
                              <path d="M1.52769 41.9008C1.52769 15.1009 87.0001 14.7068 87.0001 41.9008" stroke="#24262D"/>
                              <path d="M43.6446 1V80.3719" stroke="#24262D"/>
                              <path d="M1.26374 41.4958C2.31895 41.4958 58.8609 41.4958 86.9999 41.4958" stroke="#24262D"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M20.9009 42.3589C21.3707 42.3237 21.8447 42.3058 22.3223 42.3058C34.0983 42.3058 43.6446 53.1841 43.6446 66.6033C43.6446 53.7284 52.4322 43.1924 63.5455 42.3589V42.2526C52.4322 41.4191 43.6446 30.8831 43.6446 18.0082C43.6446 31.4274 34.0983 42.3058 22.3223 42.3058C21.8447 42.3058 21.3707 42.2879 20.9009 42.2526L20.9009 42.3589Z" fill="#F26C6C"/>
                          </svg>
                      </div>
                  </div>
                  <div className={styles.body}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </div>
              </div>
              <div className={styles.section}>
                  <h6 className={styles.head}>soft Skills</h6>
                  <div className={styles.body}>
                      <div className={styles.list}>
                          <div className={styles.item}>
                              <Category text={'cinema 4d'}/>
                          </div>
                          <div className={styles.item}>
                              <Category text={'MARVELOUS DESIGNE'}/>
                          </div>
                          <div className={styles.item}>
                              <Category text={'photoshop'}/>
                          </div>
                          <div className={styles.item}>
                              <Category text={'illustrator'}/>
                          </div>
                          <div className={styles.item}>
                              <Category text={'figma'}/>
                          </div>
                          <div className={styles.item}>
                              <Category text={'corel draw'}/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={styles.section}>
                  <h6 className={styles.head}>Contacts</h6>
                  <div className={styles.body}>
                      <div className={styles.list}>
                          <div className={styles.item}>
                              <Social type={1} link={''}/>
                          </div>
                          <div className={styles.item}>
                              <Social type={2} link={''}/>
                          </div>
                          <div className={styles.item}>
                              <Social type={3} link={''}/>
                          </div>
                          <div className={styles.item}>
                              <Social type={4} link={''}/>
                          </div>
                          <div className={styles.item}>
                              <Social type={5} link={''}/>
                          </div>
                      </div>
                  </div>
                  <div className={styles.watermark}>
                      <svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M121.594 33.6172C121.405 33.5586 121.141 33.4967 120.803 33.4316C120.471 33.36 120.041 33.3242 119.514 33.3242C118.785 33.3242 118.098 33.4154 117.453 33.5977C116.815 33.7734 116.219 34.0143 115.666 34.3203C115.119 34.6263 114.611 34.9844 114.143 35.3945C113.674 35.7982 113.251 36.2279 112.873 36.6836V46H111.652V32.582H112.873V35.3164C113.309 34.8672 113.781 34.4538 114.289 34.0762C114.803 33.6986 115.344 33.3763 115.91 33.1094C116.477 32.8359 117.069 32.6243 117.688 32.4746C118.312 32.3184 118.957 32.2402 119.621 32.2402C119.849 32.2402 120.054 32.2467 120.236 32.2598C120.419 32.2663 120.585 32.2793 120.734 32.2988C120.891 32.3118 121.037 32.3281 121.174 32.3477C121.311 32.3672 121.451 32.39 121.594 32.416V33.6172Z" fill="#F26C6C"/>
                          <path d="M146.502 53.3636L147.07 51.9922C146.54 52.0474 145.957 52.0596 145.322 52.0289C144.692 52.0007 144.041 51.9317 143.367 51.8219C142.7 51.7146 142.029 51.5668 141.353 51.3784C140.677 51.19 140.029 50.9675 139.409 50.7109C138.603 50.3771 137.908 50.0047 137.325 49.5937C136.747 49.1853 136.294 48.7475 135.966 48.2805C135.64 47.8074 135.445 47.3105 135.378 46.7898C135.315 46.2631 135.399 45.72 135.63 45.1607C135.86 44.6073 136.2 44.1774 136.651 43.871C137.11 43.561 137.664 43.3568 138.31 43.2583C138.96 43.1537 139.693 43.1439 140.511 43.2289C141.337 43.3103 142.232 43.4626 143.196 43.686C144.163 43.9033 145.19 44.1806 146.277 44.5179C147.372 44.8516 148.513 45.2259 149.701 45.6405L150.094 44.6932C150.253 44.3082 150.322 43.9385 150.3 43.584C150.277 43.2295 150.182 42.8904 150.013 42.5667C149.846 42.237 149.619 41.9278 149.329 41.6389C149.043 41.344 148.714 41.0668 148.342 40.8071C147.977 40.55 147.576 40.3099 147.139 40.087C146.712 39.8605 146.272 39.6539 145.821 39.467C145.214 39.2154 144.648 39.0162 144.124 38.8696C143.6 38.7229 143.099 38.6141 142.621 38.543C142.145 38.4658 141.68 38.4142 141.226 38.3881C140.772 38.362 140.311 38.3437 139.843 38.3332L140.389 37.0159C141.317 37.1397 142.287 37.3159 143.299 37.5447C144.319 37.7699 145.361 38.103 146.426 38.544C147.328 38.9177 148.138 39.3447 148.855 39.825C149.574 40.2992 150.153 40.8244 150.591 41.4004C151.029 41.9764 151.302 42.6006 151.411 43.2729C151.523 43.9393 151.421 44.6544 151.104 45.4182L147.621 53.827L146.502 53.3636ZM149.287 46.642C147.275 45.9356 145.53 45.3926 144.053 45.0131C142.581 44.636 141.343 44.4088 140.339 44.3312C139.336 44.2537 138.547 44.3215 137.972 44.5345C137.404 44.75 137.018 45.1014 136.817 45.5886C136.652 45.9856 136.606 46.3786 136.677 46.7675C136.755 47.159 136.939 47.5385 137.231 47.906C137.525 48.2674 137.921 48.6144 138.417 48.9469C138.916 49.2734 139.502 49.5761 140.176 49.8552C140.573 50.0196 140.991 50.168 141.429 50.3003C141.876 50.429 142.326 50.5415 142.78 50.6377C143.236 50.7279 143.691 50.8036 144.144 50.8648C144.601 50.9199 145.037 50.956 145.453 50.9732C145.868 50.9904 146.255 50.9848 146.612 50.9565C146.975 50.9307 147.291 50.882 147.56 50.8103L149.287 46.642Z" fill="#F26C6C"/>
                          <path d="M171.843 69.0286C171.475 69.3969 171.107 69.6685 170.739 69.8434C170.37 70.0183 170 70.1173 169.627 70.1403C169.263 70.1634 168.897 70.115 168.529 69.9953C168.17 69.8756 167.808 69.7076 167.445 69.4912C167.086 69.2703 166.727 69.0079 166.367 68.704C166.008 68.4002 165.652 68.071 165.297 67.7166L159.821 62.2406L169.309 52.7527L174.661 58.1043C174.932 58.3759 175.193 58.6591 175.441 58.9537C175.69 59.2483 175.906 59.5522 176.09 59.8652C176.284 60.1782 176.431 60.4959 176.532 60.8181C176.638 61.145 176.679 61.4764 176.656 61.8125C176.638 62.1532 176.546 62.4938 176.38 62.8345C176.219 63.1798 175.966 63.525 175.621 63.8703C175.312 64.1787 175.006 64.4066 174.702 64.5539C174.403 64.7058 174.095 64.7841 173.777 64.7887C173.464 64.7979 173.135 64.7358 172.789 64.6023C172.449 64.4642 172.087 64.2639 171.705 64.0015C172.133 64.4941 172.449 64.9659 172.651 65.4171C172.854 65.8682 172.955 66.301 172.955 66.7153C172.955 67.1296 172.859 67.5301 172.665 67.9168C172.476 68.2989 172.202 68.6695 171.843 69.0286ZM174.799 63.0762C174.932 62.9427 175.057 62.8 175.172 62.648C175.287 62.4961 175.372 62.3281 175.427 62.144C175.487 61.9552 175.508 61.7457 175.489 61.5156C175.476 61.29 175.4 61.0345 175.262 60.7491C175.128 60.4591 174.926 60.1368 174.654 59.7823C174.391 59.4279 174.042 59.032 173.604 58.5946L169.399 54.3893L166.084 57.7038L170.29 61.9092C170.911 62.5307 171.452 62.9841 171.912 63.2695C172.377 63.5503 172.785 63.7138 173.135 63.7598C173.489 63.8104 173.798 63.7644 174.06 63.6217C174.327 63.4836 174.573 63.3018 174.799 63.0762ZM170.953 68.1102C171.312 67.7511 171.556 67.3828 171.685 67.0053C171.813 66.6278 171.83 66.2296 171.733 65.8107C171.636 65.3918 171.422 64.9429 171.091 64.4642C170.764 63.9808 170.322 63.4606 169.765 62.9035L165.325 58.4634L161.465 62.3235L166.022 66.881C166.598 67.4565 167.113 67.9076 167.569 68.2345C168.034 68.5613 168.46 68.7708 168.847 68.8629C169.242 68.9549 169.608 68.9342 169.944 68.8007C170.285 68.6718 170.621 68.4416 170.953 68.1102Z" fill="#F26C6C"/>
                          <path d="M185.109 94.281C184.628 94.4803 184.184 94.5903 183.777 94.611C183.37 94.6317 182.989 94.5813 182.636 94.4598C182.291 94.3419 181.972 94.1572 181.677 93.9057C181.391 93.6577 181.122 93.3642 180.869 93.0251C180.621 92.6835 180.39 92.3037 180.175 91.8856C179.959 91.4675 179.755 91.0268 179.564 90.5637L176.6 83.409L188.997 78.2742L191.893 85.2664C192.04 85.6213 192.172 85.9824 192.289 86.3498C192.406 86.7171 192.489 87.0806 192.54 87.4403C192.598 87.8035 192.613 88.1533 192.583 88.4898C192.556 88.8323 192.467 89.1544 192.318 89.456C192.17 89.7637 191.955 90.0432 191.671 90.2945C191.39 90.5519 191.024 90.774 190.573 90.9608C190.17 91.1277 189.8 91.2211 189.463 91.2409C189.128 91.2668 188.814 91.2211 188.518 91.1038C188.226 90.9925 187.945 90.8091 187.677 90.5536C187.415 90.2957 187.158 89.9723 186.906 89.5837C187.113 90.2026 187.223 90.7592 187.238 91.2536C187.252 91.7479 187.18 92.1864 187.022 92.5692C186.863 92.952 186.621 93.285 186.294 93.5683C185.973 93.8491 185.579 94.0866 185.109 94.281ZM190.118 89.9127C190.292 89.8404 190.462 89.7562 190.626 89.6598C190.791 89.5635 190.934 89.4409 191.055 89.2919C191.183 89.1404 191.282 88.9548 191.353 88.7351C191.427 88.5214 191.454 88.2563 191.436 87.9398C191.423 87.6207 191.36 87.2455 191.244 86.8141C191.138 86.3862 190.966 85.8865 190.729 85.3151L188.453 79.8205L184.123 81.6144L186.399 87.1089C186.735 87.9209 187.061 88.5469 187.377 88.9867C187.699 89.4241 188.013 89.731 188.319 89.9074C188.627 90.0899 188.929 90.1654 189.226 90.1339C189.526 90.1085 189.823 90.0348 190.118 89.9127ZM184.638 93.0916C185.107 92.8973 185.473 92.6504 185.737 92.3509C186.001 92.0515 186.168 91.6898 186.239 91.2658C186.31 90.8417 186.284 90.3451 186.161 89.776C186.044 89.2043 185.835 88.5546 185.533 87.8268L183.13 82.0255L178.087 84.1145L180.553 90.0692C180.865 90.8211 181.168 91.4352 181.464 91.9116C181.769 92.3915 182.082 92.7479 182.404 92.981C182.735 93.2176 183.081 93.3385 183.442 93.3437C183.806 93.355 184.205 93.271 184.638 93.0916Z" fill="#F26C6C"/>
                          <path d="M184 114.385H197.418V115.605H184V114.385Z" fill="#F26C6C"/>
                          <path d="M189.693 147.135L178.325 142.427L178.788 141.308L190.157 146.017L192.492 140.378L193.521 140.804L188.386 153.2L187.357 152.774L189.693 147.135Z" fill="#F26C6C"/>
                          <path d="M170.439 165.773L171.288 166.623L165.916 171.995L165.067 171.146L170.439 165.773Z" fill="#F26C6C"/>
                          <path d="M145.093 190.539L140.384 179.171L141.502 178.707L146.211 190.075L151.85 187.74L152.276 188.768L139.88 193.903L139.454 192.875L145.093 190.539Z" fill="#F26C6C"/>
                          <path d="M106.484 190.699C106.484 189.495 106.702 188.453 107.139 187.574C107.575 186.702 108.174 185.979 108.936 185.406C109.697 184.84 110.596 184.42 111.631 184.146C112.666 183.873 113.783 183.736 114.98 183.736C116.185 183.736 117.308 183.873 118.35 184.146C119.391 184.42 120.296 184.84 121.064 185.406C121.833 185.979 122.435 186.702 122.871 187.574C123.307 188.453 123.525 189.495 123.525 190.699C123.525 191.5 123.424 192.226 123.223 192.877C123.021 193.535 122.738 194.12 122.373 194.635C122.008 195.156 121.569 195.605 121.055 195.982C120.534 196.36 119.958 196.673 119.326 196.92C118.688 197.174 118.005 197.359 117.275 197.477C116.546 197.6 115.781 197.662 114.98 197.662C113.783 197.662 112.666 197.525 111.631 197.252C110.596 196.979 109.697 196.555 108.936 195.982C108.174 195.416 107.575 194.693 107.139 193.814C106.702 192.942 106.484 191.904 106.484 190.699ZM107.744 190.699C107.744 191.65 107.9 192.49 108.213 193.219C108.519 193.948 108.975 194.56 109.58 195.055C110.186 195.556 110.941 195.934 111.846 196.188C112.744 196.448 113.789 196.578 114.98 196.578C116.172 196.578 117.223 196.448 118.135 196.188C119.04 195.927 119.798 195.546 120.41 195.045C121.022 194.55 121.484 193.935 121.797 193.199C122.109 192.47 122.266 191.637 122.266 190.699C122.266 189.749 122.109 188.909 121.797 188.18C121.484 187.451 121.022 186.835 120.41 186.334C119.798 185.839 119.04 185.462 118.135 185.201C117.223 184.947 116.172 184.82 114.98 184.82C113.789 184.82 112.744 184.947 111.846 185.201C110.941 185.462 110.186 185.839 109.58 186.334C108.975 186.835 108.519 187.451 108.213 188.18C107.9 188.909 107.744 189.749 107.744 190.699Z" fill="#F26C6C"/>
                          <path d="M79.9325 180.466C80.2689 179.654 80.7498 179.028 81.3754 178.59C81.9985 178.157 82.7249 177.884 83.5545 177.769C84.378 177.652 85.2838 177.686 86.2718 177.87C87.2512 178.057 88.2673 178.368 89.3199 178.804C90.4627 179.278 91.4824 179.785 92.3789 180.325C93.273 180.872 94.0231 181.426 94.6293 181.987L94.0874 183.295C93.7697 182.973 93.435 182.658 93.0833 182.351C92.7316 182.043 92.3466 181.739 91.9283 181.439C91.5075 181.145 91.0479 180.859 90.5495 180.582C90.0427 180.309 89.4825 180.045 88.8689 179.791C88.0028 179.432 87.1572 179.177 86.332 179.026C85.5044 178.88 84.7461 178.848 84.0572 178.929C83.3597 179.014 82.7527 179.22 82.2361 179.549C81.7134 179.875 81.3275 180.339 81.0784 180.94L80.1067 183.286C80.5574 183.015 81.068 182.786 81.6385 182.599C82.2005 182.416 82.7974 182.293 83.4293 182.231C84.0527 182.172 84.7 182.183 85.3713 182.264C86.04 182.351 86.7082 182.532 87.3759 182.809C88.1337 183.123 88.7787 183.471 89.3109 183.853C89.8345 184.239 90.2648 184.647 90.6018 185.075C90.9327 185.501 91.1788 185.945 91.34 186.406C91.4987 186.874 91.5891 187.344 91.6111 187.819C91.6246 188.296 91.5826 188.772 91.4849 189.246C91.3812 189.718 91.2359 190.179 91.0491 190.63L89.756 193.752L88.6102 193.277L89.8023 190.399C90.0889 189.707 90.268 189.045 90.3398 188.413C90.4056 187.777 90.3325 187.18 90.1205 186.62C89.9085 186.06 89.5418 185.542 89.0205 185.065C88.4906 184.592 87.7716 184.167 86.8633 183.791C86.1596 183.499 85.4744 183.325 84.8077 183.267C84.1385 183.215 83.4943 183.248 82.8751 183.365C82.2533 183.488 81.6568 183.678 81.0854 183.934C80.514 184.191 79.976 184.486 79.4714 184.82L77.8196 188.808L76.6737 188.333L79.9325 180.466Z" fill="#F26C6C"/>
                          <path d="M64.2266 170.439L63.3772 171.288L58.0049 165.916L58.8542 165.067L64.2266 170.439Z" fill="#F26C6C"/>
                          <path d="M53.5428 146.934L52.785 147.248C51.2675 146.051 49.8833 144.972 48.6323 144.01C47.3728 143.045 46.2399 142.25 45.2336 141.624C44.2213 141 43.328 140.57 42.5538 140.334C41.7735 140.101 41.1026 140.114 40.5412 140.375C40.1216 140.57 39.7835 140.851 39.5268 141.218C39.2616 141.581 39.0917 142.022 39.017 142.539C38.9363 143.059 38.9526 143.651 39.0658 144.316C39.1791 144.98 39.4002 145.71 39.7291 146.504C39.9334 146.997 40.156 147.458 40.397 147.887C40.6355 148.309 40.8991 148.708 41.1878 149.081C41.468 149.451 41.7745 149.8 42.1073 150.127C42.4402 150.455 42.8006 150.763 43.1886 151.054L41.9526 151.566C41.6123 151.22 41.295 150.88 41.0007 150.543C40.7004 150.21 40.4187 149.861 40.1555 149.498C39.8924 149.135 39.647 148.747 39.4195 148.334C39.192 147.921 38.9761 147.468 38.7718 146.974C38.4056 146.09 38.154 145.236 38.017 144.412C37.88 143.588 37.8665 142.832 37.9766 142.145C38.0807 141.461 38.3128 140.865 38.673 140.356C39.0306 139.841 39.5252 139.453 40.1568 139.192C40.7282 138.955 41.3806 138.914 42.1139 139.068C42.8473 139.222 43.6764 139.548 44.6014 140.046C45.5238 140.538 46.5516 141.19 47.6847 142.003C48.8179 142.817 50.0759 143.761 51.4589 144.837L47.6993 135.761L48.7369 135.331L53.5428 146.934Z" fill="#F26C6C"/>
                          <path d="M39.3008 107.391C40.0495 107.391 40.7428 107.485 41.3809 107.674C42.0124 107.856 42.5853 108.11 43.0996 108.436C43.6139 108.761 44.0697 109.148 44.4668 109.598C44.8574 110.047 45.1862 110.535 45.4531 111.062C45.7201 111.583 45.9219 112.137 46.0586 112.723C46.1953 113.302 46.2637 113.891 46.2637 114.49C46.2637 115.089 46.1953 115.682 46.0586 116.268C45.9219 116.847 45.7201 117.4 45.4531 117.928C45.1862 118.455 44.8574 118.943 44.4668 119.393C44.0697 119.842 43.6139 120.232 43.0996 120.564C42.5853 120.89 42.0124 121.147 41.3809 121.336C40.7428 121.518 40.0495 121.609 39.3008 121.609C38.5521 121.609 37.862 121.518 37.2305 121.336C36.5924 121.147 36.0163 120.89 35.502 120.564C34.9876 120.232 34.5352 119.842 34.1445 119.393C33.7474 118.943 33.4154 118.455 33.1484 117.928C32.8815 117.4 32.6797 116.847 32.543 116.268C32.4062 115.682 32.3379 115.089 32.3379 114.49C32.3379 113.891 32.4062 113.302 32.543 112.723C32.6797 112.137 32.8815 111.583 33.1484 111.062C33.4154 110.535 33.7474 110.047 34.1445 109.598C34.5352 109.148 34.9876 108.761 35.502 108.436C36.0163 108.11 36.5924 107.856 37.2305 107.674C37.862 107.485 38.5521 107.391 39.3008 107.391ZM39.3008 108.611C38.6367 108.611 38.028 108.693 37.4746 108.855C36.9212 109.012 36.4264 109.23 35.9902 109.51C35.554 109.783 35.1732 110.109 34.8477 110.486C34.5221 110.864 34.2552 111.271 34.0469 111.707C33.832 112.137 33.6725 112.589 33.5684 113.064C33.4577 113.54 33.4023 114.015 33.4023 114.49C33.4023 115.206 33.5228 115.916 33.7637 116.619C33.998 117.322 34.3594 117.954 34.8477 118.514C35.3359 119.074 35.9512 119.526 36.6934 119.871C37.429 120.216 38.2982 120.389 39.3008 120.389C40.3034 120.389 41.1758 120.216 41.918 119.871C42.6536 119.526 43.2656 119.074 43.7539 118.514C44.2422 117.954 44.6068 117.322 44.8477 116.619C45.082 115.916 45.1992 115.206 45.1992 114.49C45.1992 114.015 45.1471 113.54 45.043 113.064C44.9323 112.589 44.7695 112.133 44.5547 111.697C44.3398 111.261 44.0697 110.854 43.7441 110.477C43.4186 110.099 43.0378 109.773 42.6016 109.5C42.1589 109.22 41.6641 109.002 41.1172 108.846C40.5703 108.689 39.9648 108.611 39.3008 108.611Z" fill="#F26C6C"/>
                          <path d="M48.9618 94.1236L48.2039 93.8097C47.977 91.8906 47.7613 90.1487 47.5567 88.5841C47.3486 87.0111 47.1101 85.6474 46.8412 84.4931C46.5664 83.3363 46.2387 82.4007 45.8581 81.6864C45.4714 80.9695 44.9874 80.5048 44.4061 80.2922C43.9715 80.1333 43.5337 80.0929 43.0927 80.171C42.6481 80.2405 42.2166 80.4317 41.7981 80.7446C41.3735 81.055 40.9663 81.4853 40.5763 82.0355C40.1863 82.5857 39.8269 83.2578 39.4981 84.0517C39.2938 84.5449 39.1252 85.0283 38.9925 85.5018C38.8623 85.9694 38.7671 86.4373 38.707 86.9057C38.6434 87.3656 38.6135 87.8289 38.6175 88.2956C38.6215 88.7623 38.658 89.2355 38.7271 89.7151L37.4911 89.2032C37.4946 88.7184 37.5111 88.2531 37.5408 87.8073C37.5644 87.3591 37.6115 86.9135 37.6822 86.4706C37.7529 86.0278 37.8539 85.5798 37.9851 85.1268C38.1164 84.6738 38.2842 84.2007 38.4885 83.7075C38.8547 82.8233 39.2808 82.0414 39.7666 81.3618C40.2525 80.6822 40.7772 80.1385 41.3407 79.7307C41.8983 79.3204 42.4842 79.0627 43.0984 78.9578C43.7152 78.8468 44.3393 78.9221 44.9709 79.1837C45.5423 79.4204 46.0328 79.8526 46.4422 80.4802C46.8517 81.1079 47.2075 81.9247 47.5095 82.9307C47.8141 83.9307 48.0795 85.1187 48.3058 86.495C48.532 87.8712 48.7536 89.4287 48.9706 91.1676L52.7302 82.0912L53.7677 82.521L48.9618 94.1236Z" fill="#F26C6C"/>
                          <path d="M66.4249 65.994L57.6965 57.2657L56.1428 60.2419L55.3763 59.4754L56.937 56.5061L57.7863 55.6567L67.2742 65.1447L66.4249 65.994Z" fill="#F26C6C"/>
                          <path d="M83.2114 46.8759L82.7518 45.7662L89.7711 42.8587L90.2308 43.9684L83.2114 46.8759Z" fill="#F26C6C"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M115 85C115 101.569 101.569 115 85 115C101.569 115 115 128.431 115 145C115 128.431 128.431 115 145 115C128.431 115 115 101.569 115 85Z" fill="#F26C6C"/>
                      </svg>
                  </div>
              </div>
          </div>
          <div className={styles.right}>
              <div className={styles.stars}>
                  <svg width="96" height="28" viewBox="0 0 96 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M82.1537 0C82.1537 7.64698 75.9546 13.8461 68.3076 13.8461C75.9546 13.8461 82.1537 20.0452 82.1537 27.6922C82.1537 20.0452 88.3528 13.8461 95.9998 13.8461C88.3528 13.8461 82.1537 7.64698 82.1537 0Z" fill="#23262D"/>
                      <mask id="path-2-inside-1_7_4305" fill="white">
                          <path fillRule="evenodd" clipRule="evenodd" d="M47.9999 0C47.9999 7.64698 41.8008 13.8461 34.1538 13.8461C41.8008 13.8461 47.9999 20.0452 47.9999 27.6922C47.9999 20.0452 54.199 13.8461 61.846 13.8461C54.199 13.8461 47.9999 7.64698 47.9999 0Z"/>
                      </mask>
                      <path d="M34.1538 15.8461C42.9054 15.8461 49.9999 8.75155 49.9999 0H45.9999C45.9999 6.54241 40.6962 11.8461 34.1538 11.8461V15.8461ZM49.9999 27.6922C49.9999 18.9406 42.9054 11.8461 34.1538 11.8461V15.8461C40.6962 15.8461 45.9999 21.1498 45.9999 27.6922H49.9999ZM61.846 11.8461C53.0944 11.8461 45.9999 18.9406 45.9999 27.6922H49.9999C49.9999 21.1498 55.3036 15.8461 61.846 15.8461V11.8461ZM45.9999 0C45.9999 8.75155 53.0944 15.8461 61.846 15.8461V11.8461C55.3036 11.8461 49.9999 6.54241 49.9999 0H45.9999Z" fill="#23262D" mask="url(#path-2-inside-1_7_4305)"/>
                      <mask id="path-4-inside-2_7_4305" fill="white">
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.8461 0C13.8461 7.64698 7.64698 13.8461 0 13.8461C7.64698 13.8461 13.8461 20.0452 13.8461 27.6922C13.8461 20.0452 20.0452 13.8461 27.6922 13.8461C20.0452 13.8461 13.8461 7.64698 13.8461 0Z"/>
                      </mask>
                      <path d="M0 15.8461C8.75155 15.8461 15.8461 8.75155 15.8461 0H11.8461C11.8461 6.54241 6.54241 11.8461 0 11.8461V15.8461ZM15.8461 27.6922C15.8461 18.9406 8.75155 11.8461 0 11.8461V15.8461C6.54241 15.8461 11.8461 21.1498 11.8461 27.6922H15.8461ZM27.6922 11.8461C18.9406 11.8461 11.8461 18.9406 11.8461 27.6922H15.8461C15.8461 21.1498 21.1498 15.8461 27.6922 15.8461V11.8461ZM11.8461 0C11.8461 8.75155 18.9406 15.8461 27.6922 15.8461V11.8461C21.1498 11.8461 15.8461 6.54241 15.8461 0H11.8461Z" fill="#23262D" mask="url(#path-4-inside-2_7_4305)"/>
                  </svg>
              </div>
              <div className={styles.preview}>
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1498 11.9709C17.1498 12.2458 17.0407 12.5094 16.8463 12.7038C16.652 12.8982 16.3884 13.0074 16.1136 13.0074H13.0049V16.1167C13.0049 16.3916 12.8957 16.6552 12.7014 16.8496C12.507 17.0439 12.2435 17.1531 11.9686 17.1531C11.6938 17.1531 11.4302 17.0439 11.2359 16.8496C11.0416 16.6552 10.9324 16.3916 10.9324 16.1167V13.0074H7.82365C7.54882 13.0074 7.28524 12.8982 7.09091 12.7038C6.89658 12.5094 6.7874 12.2458 6.7874 11.9709C6.7874 11.696 6.89658 11.4324 7.09091 11.238C7.28524 11.0437 7.54882 10.9345 7.82365 10.9345H10.9324V7.82514C10.9324 7.55026 11.0416 7.28664 11.2359 7.09227C11.4302 6.8979 11.6938 6.7887 11.9686 6.7887C12.2435 6.7887 12.507 6.8979 12.7014 7.09227C12.8957 7.28664 13.0049 7.55026 13.0049 7.82514V10.9345H16.1136C16.3884 10.9345 16.652 11.0437 16.8463 11.238C17.0407 11.4324 17.1498 11.696 17.1498 11.9709ZM26.6962 26.7014C26.4982 26.8929 26.2334 27 25.9579 27C25.6824 27 25.4177 26.8929 25.2196 26.7014L19.6239 21.0916C17.2672 23.0715 14.2373 24.0649 11.1661 23.8647C8.09484 23.6645 5.21947 22.2862 3.13962 20.0171C1.05978 17.7481 -0.0639466 14.7635 0.00281298 11.6859C0.0695726 8.60832 1.32166 5.67531 3.49794 3.49861C5.67423 1.32192 8.60667 0.0695859 11.6837 0.00281352C14.7607 -0.0639589 17.7447 1.05998 20.0133 3.14022C22.2819 5.22047 23.66 8.09639 23.8602 11.1682C24.0603 14.24 23.0671 17.2705 21.0876 19.6276L26.6962 25.2244C26.8908 25.4209 27 25.6863 27 25.9629C27 26.2395 26.8908 26.5049 26.6962 26.7014ZM11.9686 21.8171C13.9156 21.8171 15.8189 21.2397 17.4378 20.1577C19.0567 19.0758 20.3185 17.5381 21.0636 15.7389C21.8087 13.9397 22.0036 11.96 21.6238 10.05C21.2439 8.14004 20.3064 6.38561 18.9296 5.00859C17.5529 3.63158 15.7988 2.69382 13.8892 2.3139C11.9795 1.93398 10.0002 2.12897 8.20136 2.8742C6.40255 3.61944 4.86508 4.88145 3.78337 6.50066C2.70166 8.11986 2.1243 10.0235 2.1243 11.9709C2.12773 14.5812 3.16599 17.0837 5.01142 18.9295C6.85685 20.7752 9.3588 21.8137 11.9686 21.8171Z" fill="#23262D"/>
                  </svg>
              </div>
              <div className={styles.smile}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="14.3214" cy="13.8093" rx="12.8093" ry="12.6786" transform="rotate(90 14.3214 13.8093)" fill="#DCF26C" stroke="#24262D" strokeWidth="2"/>
                      <ellipse cx="10.8394" cy="11.8879" rx="2.88209" ry="1.32159" transform="rotate(90 10.8394 11.8879)" fill="#23262D"/>
                      <ellipse cx="17.5137" cy="11.8879" rx="2.88209" ry="1.32159" transform="rotate(90 17.5137 11.8879)" fill="#23262D"/>
                      <path d="M6.31555 14.77C7.2122 22.8063 20.2777 23.7984 22.3271 14.77" stroke="#23262D" strokeWidth="2"/>
                  </svg>
              </div>
              <div className={styles.label}>
                  <svg width="661" height="903" viewBox="0 0 661 903" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M635.477 895.271L635.477 899.76L637 900.516L637 902.941L628.949 898.729L628.949 896.303L637 892.09L637 894.516L635.477 895.271ZM633.906 898.98L633.906 896.039L630.941 897.504L633.906 898.98ZM637 884.278L637 886.451L628.949 886.451L628.949 881.002C628.949 880.416 629.01 879.92 629.131 879.514C629.252 879.104 629.424 878.772 629.646 878.518C629.869 878.26 630.139 878.075 630.455 877.961C630.768 877.844 631.117 877.785 631.504 877.785C631.844 877.785 632.141 877.834 632.395 877.932C632.648 878.026 632.867 878.155 633.051 878.319C633.23 878.479 633.383 878.666 633.508 878.881C633.633 879.096 633.736 879.323 633.818 879.561L637 876.924L637 879.467L634.035 881.905L634.035 884.278L637 884.278ZM631.492 879.983C631.336 879.983 631.203 880.004 631.094 880.047C630.984 880.086 630.896 880.157 630.83 880.258C630.76 880.36 630.709 880.496 630.678 880.668C630.646 880.836 630.631 881.047 630.631 881.301L630.631 884.278L632.354 884.278L632.354 881.301C632.354 881.047 632.338 880.836 632.307 880.668C632.275 880.496 632.227 880.36 632.16 880.258C632.09 880.157 632 880.086 631.891 880.047C631.781 880.004 631.648 879.983 631.492 879.983ZM630.701 866.534L637 866.534L637 868.708L630.701 868.708L630.701 872.124L628.949 872.124L628.949 863.112L630.701 863.112L630.701 866.534ZM637.24 847.329L637.24 849.24L628.586 845.267L628.586 843.357L637.24 847.329ZM637 828.312L628.949 828.312L628.949 827.58L636.314 827.58L636.314 821.697L637 821.697L637 828.312ZM637 815.578L628.949 815.578L628.949 814.846L637 814.846L637 815.578ZM637 803.729L637 804.825L628.949 808.844L628.949 808.024L636.496 804.256L628.949 800.489L628.949 799.674L637 803.729ZM637 793.673L628.949 793.673L628.949 786.964L629.635 786.964L629.635 792.876L632.406 792.876L632.406 787.263L633.086 787.263L633.086 792.876L636.314 792.876L636.314 786.876L637 786.876L637 793.673ZM630.139 773.79C630.064 773.943 629.986 774.118 629.904 774.318C629.818 774.517 629.742 774.745 629.676 775.003C629.609 775.257 629.555 775.544 629.512 775.864C629.465 776.185 629.441 776.54 629.441 776.931C629.441 777.404 629.469 777.825 629.523 778.196C629.578 778.564 629.664 778.876 629.781 779.134C629.895 779.388 630.039 779.583 630.215 779.72C630.391 779.853 630.6 779.919 630.842 779.919C631.045 779.919 631.223 779.857 631.375 779.732C631.527 779.603 631.662 779.431 631.779 779.216C631.896 778.997 632.004 778.743 632.102 778.454C632.195 778.161 632.285 777.853 632.371 777.529C632.453 777.2 632.537 776.864 632.623 776.521C632.709 776.173 632.803 775.837 632.904 775.513C633.002 775.185 633.113 774.876 633.238 774.587C633.359 774.294 633.502 774.04 633.666 773.825C633.83 773.607 634.018 773.435 634.229 773.31C634.439 773.181 634.684 773.116 634.961 773.116C635.262 773.116 635.525 773.173 635.752 773.286C635.975 773.4 636.168 773.554 636.332 773.749C636.492 773.941 636.627 774.167 636.736 774.429C636.842 774.687 636.926 774.964 636.988 775.261C637.051 775.554 637.094 775.859 637.117 776.175C637.145 776.487 637.158 776.796 637.158 777.101C637.158 777.8 637.107 778.435 637.006 779.005C636.904 779.571 636.766 780.112 636.59 780.628L635.693 780.628C636.01 780.097 636.227 779.536 636.344 778.946C636.461 778.353 636.52 777.73 636.52 777.077C636.52 776.616 636.492 776.191 636.437 775.8C636.383 775.409 636.297 775.071 636.18 774.786C636.059 774.501 635.902 774.28 635.711 774.124C635.52 773.964 635.285 773.884 635.008 773.884C634.785 773.884 634.59 773.948 634.422 774.077C634.254 774.202 634.107 774.374 633.982 774.593C633.854 774.808 633.74 775.062 633.643 775.355C633.545 775.644 633.455 775.95 633.373 776.275C633.287 776.599 633.205 776.935 633.127 777.282C633.045 777.626 632.957 777.96 632.863 778.284C632.77 778.609 632.664 778.917 632.547 779.21C632.43 779.499 632.293 779.753 632.137 779.972C631.977 780.187 631.793 780.359 631.586 780.487C631.379 780.612 631.139 780.675 630.865 780.675C630.596 780.675 630.357 780.624 630.15 780.523C629.939 780.421 629.758 780.282 629.605 780.107C629.453 779.927 629.326 779.718 629.225 779.48C629.119 779.241 629.037 778.987 628.979 778.718C628.916 778.445 628.871 778.161 628.844 777.868C628.816 777.575 628.803 777.286 628.803 777.001C628.803 776.689 628.816 776.394 628.844 776.116C628.871 775.835 628.908 775.566 628.955 775.308C628.998 775.046 629.049 774.792 629.107 774.546C629.166 774.296 629.229 774.044 629.295 773.79L630.139 773.79ZM629.617 763.265L637 763.265L637 763.992L629.617 763.992L629.617 767.654L628.949 767.654L628.949 759.603L629.617 759.603L629.617 763.265ZM633.59 750.109L637 750.109L637 750.842L633.59 750.842L628.949 754.621L628.949 753.748L632.98 750.473L628.949 747.209L628.949 746.33L633.59 750.109ZM637 740.217L628.949 740.217L628.949 739.485L636.314 739.485L636.314 733.602L637 733.602L637 740.217ZM637 727.483L628.949 727.483L628.949 720.774L629.635 720.774L629.635 726.686L632.406 726.686L632.406 721.073L633.086 721.073L633.086 726.686L636.314 726.686L636.314 720.686L637 720.686L637 727.483Z" fill="#24262D"/>
                      <path d="M634.941 70.4454L633.02 70.4454L633.02 65.6407L634.941 65.6407L634.941 70.4454ZM634.941 59.6449L633.02 59.6449L633.02 54.8402L634.941 54.8402L634.941 59.6449ZM634.941 48.8445L633.02 48.8445L633.02 44.0398L634.941 44.0398L634.941 48.8445ZM634.941 38.044L633.02 38.044L633.02 33.2393L634.941 33.2393L634.941 38.044ZM634.941 27.2435L633.02 27.2435L633.02 22.4388L634.941 22.4388L634.941 27.2435ZM634.941 16.443L633.02 16.443L633.02 11.6384L634.941 11.6384L634.941 16.443ZM634.941 5.64258L633.02 5.64258L633.02 0.83789L634.941 0.837889L634.941 5.64258Z" fill="#24262D"/>
                  </svg>
              </div>
              <div className={styles.slider}>
                  <Slider {...settings}>
                      <img src={'/images/resume/0.webp'} alt="Resume 0"/>
                      <img src={'/images/resume/1.webp'} alt="Resume 1"/>
                      <img src={'/images/resume/2.webp'} alt="Resume 2"/>
                  </Slider>
              </div>
          </div>
      </section>
  )
}

export default SectionResume;

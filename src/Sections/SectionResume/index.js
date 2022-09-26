import styles from './index.module.scss'

import Category from "../../Components/Category";
import Social from "../../Components/Social";

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
              </div>
          </div>
          <div className={styles.right}></div>
      </section>
  )
}

export default SectionResume;

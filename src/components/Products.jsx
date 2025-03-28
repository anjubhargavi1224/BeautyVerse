import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { starOutline, repeatOutline } from "ionicons/icons";

import Lady1 from "../assets/Lady1.jpeg";
import Lady2 from "../assets/Lady2.jpeg";
import Lady3 from "../assets/Lady3.jpeg";
import Lady4 from "../assets/Lady4.jpeg";
import Lady5 from "../assets/Lady5.jpeg";
import Men1 from "../assets/Men1.jpeg";
import Men2 from "../assets/Men2.jpeg";
import Men3 from "../assets/Men3.jpeg";
import Men4 from "../assets/Men4.jpeg";
import Men5 from "../assets/Men5.jpeg";
import Baby1 from "../assets/Baby1.jpeg";
import Baby2 from "../assets/Baby2.jpeg";
import Baby3 from "../assets/Baby3.jpeg";
import Baby4 from "../assets/Baby4.jpeg";
import Baby5 from "../assets/Baby5.jpeg";

const products = [
  { name: "Facial Rejuvenating Serum", image: Lady1, link: "https://www.amazon.in/Vaseline-Gluta-Hya-Radiance-GlutaGlow-Brighter/dp/B0BXSDJQNR/ref=sr_1_1_sspa?crid=RIXEV8YI6WJU&dib=eyJ2IjoiMSJ9.3MNgZlbAwX-h_sqTN_tY_kP7gLaHuyDdYewciw8AXgPki2QxH96aA6VqgMvrXIT_PrNN6WiTjReF1rdZYQ-hfIIYdb72vf9x13z55O2upHdqVObOj4mP1ShqPVMwgWVM2K0eu2cSW-SYtFfsU5Q6x1TWMkKj1F1_3bHnvuB9Xt4xGqHIk3cKJsv4iNLS_yJ6z2QNiiU5DfSueKdi7RGIuL_-VgDWAnvHDXQSGKD9Dl71itqF5HcmR-VPVoBFzcDfzcuWGEV_HGvPKxwjL4MvuQXyJ-EUfM4ujKue6JSVZq0.Fdmz74EmTUuqOIryuouYoMUmyNznBEXJ078xD1GkpVs&dib_tag=se&keywords=gluta+hye+vaseline&qid=1743160172&sprefix=gluta+hye%2Caps%2C445&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1 ", category: "Women" },
  { name: "Foaming Cleanser", image: Lady2, link: "https://www.amazon.in/CeraVe-Foaming-Cleanser-Normal-Oily/dp/B07CJPX7KW/ref=sr_1_5?dib=eyJ2IjoiMSJ9.On67IVe281Mhe2DPLCDrpZQpM5tAUA-1e7n4-ZG7r0-AVKrJhzAiv0605aFtleNxDVerbkyicfB01sMedBHLy-Xtbgnm4OyFj9Ld_TU0lI5-Nl0wGbmCU5-koxK9-BKpgDW2CcR0Y7X4LAkgypy9o-EZ1w0928L5yxpEHM-QK_zJL-vf60IPrjildbOOAyRW-CySeSFDpWmKt1izMtwOCZVoXXVVLKWYaKuW0Awtz6QDLQJLb09e2hdJ41zCgqAl43_qewBnXYwObWjS3iOCNqAcNTiDfngPaF95Tlvxvyc.uclQXuYwih95ODmV2MSYsDuwJ3uX-ufd-n5hMbGjac0&dib_tag=se&keywords=cerave+foaming+cleanser&qid=1743160334&sr=8-5  ", category: "Women" },
  { name: "Mucin Power Essence", image: Lady3, link: "https://www.amazon.in/Cosrx-Advanced-Snail-Mucin-Essence/dp/B00PBX3L7K/ref=sr_1_5?crid=3LBO6XPE9AKVU&dib=eyJ2IjoiMSJ9.xN4bD3Ou4jGZkrE_AOVKp2lRB09XPp7FzhPjBi6_Xp6ZKG5AuuwdaynFXHZQvQJzLneep8B7zu7X3ZPkAHD_3XHYgYp6Kwx5PCJJ9MsM7yOKxtehiyLWZvGazK2C4Kq7044-hs0BTMX7_qBSbZSLjlMxd7mxIAUMXxcd0C7DAWaVie_caBg8LxC49kfIY12vPrHqxfoo40CDJANyCVC4iebNgJEa8U11BE_KSJCCWL81ZFnzVMe7I7QcE9LA_gvAyHNaK7pup_vIJVX72ci7GqeIvnCM_lzSXbjkh4eEYLHC2Z3Ln4tYP0FEY-hjUsHa7p6GxuMfYOXmEWFo-Wah3Dr_4INk__OOZuXWpX8_gjJoA08ewxy1jFnwITOlhtcZvrD3eb7yCNpFYnOWfjsdSMT3-dPKlx9hEtXYZjhYueNRhG3d_fGuNSSs-veOd1Qd.-b9M0tbRCjuktKchip89MXXyta5tJOfxdGg-R3pDTaQ&dib_tag=se&keywords=snail+mucin&qid=1743160649&sprefix=snaio+mucin%2Caps%2C522&sr=8-5  ", category: "Women" },
  { name: "Skin Radiance Mask", image: Lady4, link: "https://www.amazon.in/Foxtale-Glowing-Reduction-Blackheads-Brightening/dp/B0D2RQMS7Q/ref=sr_1_5?crid=UET2566YVIAN&dib=eyJ2IjoiMSJ9.MK-3tHmrh7YJXXpCENJcrR4p0-Flz2qRrO2nkfiU2ZoQS0jSY0tvnDrP-Ffj2c-aNwOw08VCYZ_1VCz7la_Py4excLfhRnVKuJYrtytzGFH11jPnCIs7ff0effhhiFRv24hHR8EO6hUP7lnC175_l1_tOayv3hqeAR_1uhPIB1t-giG3HzYMXyEu4yG68Kml3KNyficoQ2W324p6NhehIS8ks4KtiNjVw-ZqNFeVI2B5yEtvgJSg-2GjUINg42d-rKJY17w7UPNBf9OE4PIX_fJ3faUExuv5Oj_A0uZSX29HfNuGvUsPu-0RRtsFnp4WEIiwvWDJQ3bDQ_t6cIEZ4XE7KtDf-6p3871r1zCKs0E79_bHluHdrUsYiLoqhGd3XJD96n_5b4G0OmRpx1ntJEcfYQAxjHIOfS2otBvs4FfcbN0w1pXulR03cYqpKYYV._dI9Ca8EMU1QL-VQBIKP1UOKF3K-LJBd399RFDFRvHM&dib_tag=se&keywords=skincare%2Bproducts%2Bfor%2Bfoxtail%2Bradiance%2Bmask&qid=1743159950&sprefix=skincare%2Bproducts%2Bfor%2Bfoxtale%2Bradiance%2Bmas%2Caps%2C779&sr=8-5&th=1 ", category: "Women" },
  { name: "Vitamin C Bathing Bar", image: Lady5, link: "https://www.amazon.in/ZM-Zayn-Myza-Brightening-Dermatologically/dp/B09PNK4KCD/ref=sr_1_23_sspa?crid=2PWCAOPN0RQFA&dib=eyJ2IjoiMSJ9.q0eeJ-G6zIVCnAlD3PJEnZCK-UoDk-XVHV5ivegRWW0xSvnlxZrhkGCq_T6qzW2_z06N2F3GOdewM6jJFCvu0Wpv_K-W1P5woLm7LP9KklCJ-7RWeILQI_BjlblH7wEYhPPmXLo6eWi80RoyPHbASDVoDYgEPvkmDHC_M08w1oMaM7nvCRNCltRq__8KBih4eMR01JYZRA8Mire356QRLjYmTL1XDh5H-PNONCx79efa5ySBn2gHXN2SX3fgftZoI9lmL87MSm8U3sbiElR__HUGuJVI5NZ5mnbkU6J3CFg.acb3xDob06Jyk8eaGOHysPBjY6Dmoacty2BE27EK_2Y&dib_tag=se&keywords=skincare+for+ladies+SOAP&qid=1743160731&sprefix=skincare+for+ladies+soap%2Caps%2C330&sr=8-23-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1", category: "Women" },
  { name: "Oil Control Facewash", image: Men1, link: "https://www.amazon.in/Nivea-All-Pump-Facewash-150g/dp/B00X9UOCEI/ref=sr_1_6?crid=31J3ZFREDLW6S&dib=eyJ2IjoiMSJ9.Tjo57BdIIpCGqnhsO9oBbQiAiSTXOpCO2Ah2gBSX9_AxZyyBRykajt0mRuJIxtpGTUFMf81h94xWk-fo0i4rTjDWxM_g6iiN3HoY3hL8iPhnqvVrSQmjLu4YB41TtMjvYHzrZxM8bVhORxnKfcP3OsbhNK_xd2_mggO9UzBMNuUstjlLxl-86cJ2-mlFrmdMS2hc-GU5yFUhEO42civKd25JCiaMn_vdarhvuRG4aEsu8KDEdAdVV1nH9TDvP9Muj5U8SbhqubtXp4w5diKdpaG1h_ePPXw-ZQCc44EB-1R6H0Bn4hmQbnPCZWtwiSMFfWz0cNjjUy0o2gNsCkutzatiwHda4gXfur9LTZ5pczX0yy3w9rJQQX2QHXfb9FJ1XB78bDmXDFSAeMO3G0n3Xeg75D2oQDNy0r_pG_HrA2l1vpEUM35bzgoHtqOOskD2.-CPLGQ2q8vPoVa3XDMJZ2IbReh14ftMMR3xy2ywCBcw&dib_tag=se&keywords=nivea+men+oil+control+face+wash&qid=1743161003&sprefix=NIVEA+MEN+OIL%2Caps%2C289&sr=8-6  ", category: "Men" },
  { name: "The Man Company De-tan Kit", image: Men2, link: "https://www.amazon.in/Man-Company-Detan-Facial-Kit/dp/B07YDZ45FS/ref=sr_1_8?crid=CYSBWG89JTZR&dib=eyJ2IjoiMSJ9.OHaoWuKyYdQYfiHKAs39UZCq4GjqtVe1I_9JbNo-b9r2M1-kPKLBesHjdnC1ypPqLBEe4n9jGdL16jnYDzY9nyowpMkkj6ecEcsLFexKRAlH21TS5viHOaPLG9IOKryr_kDH89N_HgKpnVrhZBK1JRfcz1AAeIW4sWxtyspopvpfKaqAuGqgKFqg39VN-n3a1ZrN7qk42VbOy8gy-Ey6eq6wBsBX3VTOqEQ9Ws57C-DIhOoVhW3PNfYSv2YaIuWrFeuSZ8AUEc7BWNvSNXjg76t5gH7nnli1GIEXm_x-ANrIt6LuGq2YYYBQHHlxHVgNTtX7BJafy0MgGHKJJBt2f2mLD9qPJN0VSydpBcsTx7Olne_-2_Ua70dwyPuMm8MrZYM4YEMGm6KOXRGHVYUPi3EKyOZN5nm3MoJJx6oBewcLn9CPuYAefwmsQKDTAzZD.pxJDEy62IUFimX-4SuAZRg4BdodqsCka1nbLkmB_UI8&dib_tag=se&keywords=skincare+products+for+men&qid=1743160877&sprefix=skincare+products+for+men%2Caps%2C756&sr=8-8   ", category: "Men" },
  { name: "SPF 30 Face Cream", image: Men3, link: "https://www.amazon.in/Beardo-Ultraglow-Brightening-Reduction-Protection/dp/B09MJ3936B/ref=sr_1_5?crid=AHLOGL0EBFVC&dib=eyJ2IjoiMSJ9.lJdGB9fBoboi8l4EBY0H7D7PF6wvTC9iRMQPjITK6UfvYrgsCqLm8piPBNyIZNd7PFhg2fWkh_v9gTwdAMyxpI7AmPxy5U9kIj6vI_FoSv39wOJ_tXYUK7zQc73H7nMF8IdrZDeRE8I0UFvG_VE33hAq5raTJ1ofja4veWTCZEDvSZ05vkcEdxim0CQgVYq4Tsx8hEgn3u_OuAng-GEJITJAu461fonKGxftWGhiFA-zfBq3DqvqRNhQbGDfk46kBRBhIGHEXALGc6xFB55M7ycCCQSGKC2BuNe3kEu693w.ekgdK0khIim3DHHnqR3PJiQevGSPiWDE-ABcqmbcoWI&dib_tag=se&keywords=ULTRA+GLOW+FACE+CREAM+BEARDO&qid=1743160260&sprefix=gluta+hy%2Caps%2C9582&sr=8-5", category: "Men" },
  { name: "Minimalist Anti-Acne Kit", image: Men4, link: "https://www.amazon.in/Minimalist-Anti-Acne-Kit/dp/B0B9SN8P4M/ref=sr_1_8?crid=2XHJREMB79C16&dib=eyJ2IjoiMSJ9.OHaoWuKyYdQYfiHKAs39UZCq4GjqtVe1I_9JbNo-b9oADBcZw5otds4IC5h0maf6mHBVIKifXM8aVMMXymG7IppP8Rm2yJns0SFMDRsbQsU-r1S6-qIEFApmvh6xIc3eDru7JL_IM8gnCZBPgzh4jBoyC_XBRvjplcxqS25Svvo8wYSkbkhAKC_g8VOUSiIw1ZrN7qk42VbOy8gy-Ey6ei81-gQIsRAG08CIGm4jgM5PLrtlEXxZreA3VIbkG5Q9XTC6_VcC3cfYVlG3frDzHQaILsHDI8lCO_OdO7rpSrod1nfvYa6pMOC4yCBWjL9eW4qO7I77LORCpYVdiXgFPBLz9YGa9galzr8Deu6IfPy3B_yRFezTPr_tvZJHlQYAbEC0DlYfIiIxXzmZSoLoxLLI_GHXKwGvwNUh5uPvBfYsqqqKZtM9BnoWQhuo_UgD.Ksmz1TZ8-8Cvnsp41zjQ8lbZ-QAgB9l9UIg74gfQoSQ&dib_tag=se&keywords=skincare+products+for+men&qid=1743157483&sprefix=skincare+products+for+men%2Caps%2C293&sr=8-8  ", category: "Men" },
  { name: "Daily Multi-Action Face Wash", image: Men5, link: "https://www.amazon.in/Mancode-Skin-Brightening-Face-Wash/dp/B0C787P92N/ref=sr_1_37?crid=KOPJSGFHV3ZV&dib=eyJ2IjoiMSJ9.9V5cfUENtssNChmL_twTllo7KQNlJuKH1rJ20Fp4ZPrVVZ9T7xcKWTDZmDincla0Os5WLSrO1zTHFiIKJaItjuOQ5PKIS_VGrHm_PGAta6crWHo0HD1Owm8l3N0JPR_uwUGL5o7mtRgG3g_OW0TCzoplR73cQpitIKQ7E7c3hIZY-keT0yksuGYpXsrBQmonjgxJWFw1Mgk1FUIeNQxSGcyswNauIfKGu3DAlx2ykWFDo6__0K_ejwteecn4NjJsoVlOWXTTYAl3rYcUs084vOe1kUKbiRK2QX7hNmk33j_D4pUyK7unQF0JCClG-DH7FRKZf1kLZ7Oj2FlUfPgLfPJ0MLAtEhLNJ2hlimRlPEUc9MW1aJZGjSsdl9NICcLP5gG5K71ejuBTNVqdLJwMVmy2zWDOqZuDSfLrQlyV7WnKxS5Gc_bWIuIuEFr8eTs0.ae_lSVqMgneDpQP-3auUKMbxntZhK6cK7lys6iStQRI&dib_tag=se&keywords=skincare%2Bfor%2Bmen&qid=1743161102&sprefix=skincare%2Bfor%2Bmen%2Caps%2C290&sr=8-37&th=1", category: "Men" },
  { name: "Unscented Baby Lotion", image: Baby1, link: "https://www.amazon.in/Mother-Sparsh-Unscented-Fragrance-Protection/dp/B0D97QLQ97/ref=sr_1_6?crid=30MHKZAO91NUQ&dib=eyJ2IjoiMSJ9.N1koXtLfQavbBj2zo78cmXTkiFLpG27G-p2TO7bHi5qLB716Z_5LjoCCEMyHS9GBIPFRtmwvKS1-NcrzUfcAh8oRElicLOfke84SiO2N2C2OR8eP3fHHD_CtzYkxZup8eHwpGDQNi8uFf0DjPmKabTSI42zu6qLAvW2E46NXz8mjlSTxwsKjTIkrRxDrncS-gEG5-Wfsi2sgcD77MkfuH5bFzANoxgqb5PritpCwRmXH1Ev8hqBBPJwTmsXYfYD3EdwpDoA9UZbIZozNRkaBS0RZvjUh8evY3SovccE4qjmcmDkL6Dijm5O8UsW4rjuXDzy3z_h7FBdeVyJOD80tTZx8Y05rtV3-lQDlKXQuh5kNiERQd55LGTTERZkoxmdm-cRePtNm5h5aJ3azqyc28gvighl_5kRAgWijkJLX__MnU5i8jRrF0g9LIUql4FZk.8K6pzjiH7cVfLvgbQw2ilz0hbaiPqaAXd-jxqlUB9J8&dib_tag=se&keywords=MOTHER+SPARSH+UNSCENTED+LOTION+FOR+BABIES&qid=1743161232&sprefix=mo%2Caps%2C7588&sr=8-6 ", category: "Kids" },
  { name: "Body Lotion", image: Baby2, link: "https://www.amazon.in/SebaMed-Sebamed-Baby-Lotion-100ml/dp/B00DRE5CLI/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.70fd741c-68a9-470a-9805-115e3115104d%3Aamzn1.sym.70fd741c-68a9-470a-9805-115e3115104d&crid=7OUK25FLFALJ&cv_ct_cx=baby%2Bskincare%2Bsensitive%2Bskin&keywords=baby%2Bskincare%2Bsensitive%2Bskin&pd_rd_i=B00DRE5CLI&pd_rd_r=a7296353-1963-41ef-a354-d54b386d7448&pd_rd_w=nAuWW&pd_rd_wg=RxKoB&pf_rd_p=70fd741c-68a9-470a-9805-115e3115104d&pf_rd_r=JTAFVF8G2GXVB0DRDK7K&qid=1743161448&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=baby%2Bskincare%2Bsesnitive%2Bski%2Caps%2C293&sr=1-5-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1", category: "Kids" },
  { name: "Baby Moisturizing Cream", image: Baby3, link: "https://www.amazon.in/Atogla-Tube-100-Gms-Cream/dp/B0895M97JZ/ref=sr_1_6?brandId=berry&dib=eyJ2IjoiMSJ9.pE-lhjN062UxOSi4Dmmgl1T9OLCLBqz73LYB-oGSRxMcc7yY3u1_CzurK8BfZLJ0ik55HZSNs6a7bWc_Gi2ir6cxBvWEsl8RjeRuj7JHzuTS8_120mD_zUmejj4LGT492HVo4edAnRgGYM7vtY8tKkIbwMtZmllgtpeLnC4SU6cCx_ropoaQpiEBv6NoVZAlEfyR8RKeqwBM8lh5Ei97PRv-qoJHUoqZOwYrlv261yl0tk76dIb-k1AntqVyrIbt18yIuBlp8lVmO_Z6pwxdWHKMmGoRjV-Ok2-QKgVMnd6Q6BeEteLjbx9C8UKXu4IrKNjow-LZvbLB_QAHKpvEwXOrS72ndM-lomz18c1tC6kxPFYAj5BZHZMyMNw6vOvFv3h-WQrTY6JcjlPLtgr8A0B474EPPHDeou4I3rTAbBchFYieAE1R1PTSEjgKlFS7.ZBl2Qv1mYsD3QzrFHwh28ZM8fakmx6yE84ipBWQJeqE&dib_tag=se&keywords=atogla+moisturising+cream&qid=1743160404&sr=8-6", category: "Kids" },
  { name: "Skin Healing Cream", image: Baby4, link: "https://www.amazon.in/EqualsTwo-Baby-Skin-Healing-Cream/dp/B0BJ72G7QV/ref=sr_1_1_sspa?crid=1EHJCDYSIO97W&dib=eyJ2IjoiMSJ9.6WTyOsTgzeb5YvvbsCWCEWVqRP19hOjDAbvnYrSnsJqZLq06z_gRVsPZufOlgoW507NLWnLcOv5CuQYcKY1LUbkpjK7nf17UJQ7v-NGRa3p3mtsZbtEvLtZ41hnbGnoc_BedyWFCK88KGpHIMtB4LjfD7j9LzjaF-r4yjxyhJa38VO8qxO60S0_JKojVbpbdgGAr9AQN8Ks50EaIJ08L_KXvkQNDQObctb0zmGLTgHBdc0Lf0q1bIcSHJWisyXETht2z5HzS1q-uUBzQ3M4JnlTxxHfAu96RWJeUMVFVzhk.uvyS5o4Huq2OwU5cEWiMaKzT5vFEEGeCrZOM4iB7Kx8&dib_tag=se&keywords=equals+two&qid=1743161378&sprefix=equals+two%2Caps%2C757&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1", category: "Kids" },
  { name: "Nourishing Massage Oil", image: Baby5, link: "https://www.amazon.in/CITTA-Natural-Nourishing-Massage-approved/dp/B096B14SBM/ref=sr_1_3_sspa?crid=2YB50INM3DJD&dib=eyJ2IjoiMSJ9.-WQlvsxkOq23gsEmRfreQqRNCxmIDNlx9tUgX3c7ackb_IJyRugDWxfNsgE_AoX0bopi83dj71j-jUL71QsiKBRwaneHPwJ_HTvZ8sAIXmwtdIPonuBqhpp426CuvUPRk4S_OSZtp1YtWo7p5XFhcSjA-mR_YbWLrnTXdoQ6-s6wDZ1eflcT60B5N-5AkkaUQ4Yu9fHypByfcCq5O4eqz7PNH_dcA1fpXKRZZQ9Vgxso78qqNEUmguZHDuCZZ1fsqXnuzSX5Px-C-BrhiPrI9y3u2Lgq3aVYGcWQxV563nU.8sOHw4xdQeSlge0oa3R_nlDJeL0DLcDx7pg5_Y1IGrw&dib_tag=se&keywords=baby%2Bskincare%2Boil&qid=1743161589&s=baby&sprefix=baby%2Bskincare%2Boil%2Cbaby%2C316&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1", category: "Kids" },
];

const Products = () => {
  const [flipped, setFlipped] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("products-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleFlip = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index], // Flip only the clicked product
    }));
  };

  return (
    <section id="products-section" className={`py-32 bg-white transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Dermatologist-Backed Recommendations</h2>

        {["Women", "Men", "Kids"].map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {products
                .filter((product) => product.category === category)
                .map((product, index) => {
                  const productKey = `${category}-${index}`;
                  return (
                    <div key={productKey} className="flex flex-col items-center">
                      <div className="relative w-48 h-64 perspective-1000">
                        <div className={`relative w-full h-full transition-transform duration-500 transform ${flipped[productKey] ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                          <div className="absolute w-full h-full shadow-lg rounded-lg bg-white" style={{ backfaceVisibility: "hidden", transform: flipped[productKey] ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                          </div>
                          <div className="absolute w-full h-full bg-red-500 flex items-center justify-center text-white text-lg font-bold rounded-lg" style={{ backfaceVisibility: "hidden", transform: flipped[productKey] ? "rotateY(0deg)" : "rotateY(180deg)" }}>
                            {product.name}
                          </div>
                          <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <button className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full text-gray-600 hover:bg-black hover:text-white transition">
                              <IonIcon icon={starOutline} size="large" />
                            </button>
                            <button onClick={() => handleFlip(productKey)} className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full text-gray-600 hover:bg-black hover:text-white transition">
                              <IonIcon icon={repeatOutline} size="large" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-800">
                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{product.name}</a>
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

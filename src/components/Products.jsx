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
  { name: "Foaming Cleanser ", description: "This gently removes excess oil, dirt, and makeup while maintaining the skin's protective barrier with ceramides, hyaluronic acid, and niacinamide. Its refreshing, non-stripping formula is ideal for normal to oily skin.", category: "Women", image: Lady1, link: "https://www.amazon.in/CeraVe-Foaming-Cleanser-Normal-Dermatologist-Developed/dp/B07C5XD33D/ref=sr_1_2_sspa?crid=G7BPQ5N490WV&dib=eyJ2IjoiMSJ9.On67IVe281Mhe2DPLCDrpZQpM5tAUA-1e7n4-ZG7r0-AVKrJhzAiv0605aFtleNxDVerbkyicfB01sMedBHLy4ktRSb-rACrC5T9twju4Wk3zOqM-p8HiNn_G5y1Nd6andsC1Dlq-sUqZpaproKxUw7w-2zvP0RPxCunpl4KagTwCwowdV6D8tbp2rPHRRn1v9Baw4DJreXVRkEgbj2yXCuHBI_9cNS3LNO7l8j2_qfeOtm4fg4UY5QJUGw8LGbT_DGNfJuSkmbtsnU0Sqk6t8D-_MIIwKzqn252drYx7LE.Bx7zKLm4udnwvB1a_6eTLOfBYUBLe3MuPWnWBMkXNaQ&dib_tag=se&keywords=cerave+foaming+cleanser&qid=1743491948&sprefix=cerave+%2Caps%2C251&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { name: "Dark Spot Clearing Face Serum", description: "This serum fades dark spots, exfoliates gently, and clears acne marks. It blends nature and science to deliver glowing, radiant, and healthier-looking skin.", category: "Women", image: Lady2, link: "https://www.myntra.com/serum-and-gel/himalaya/himalaya-dark-spot-clearing-turmeric-face-serum---30ml/25746878/buy" },
  { name: "Glycolic Acid 7% Toning Solution", description: "Offers a gentle exfoliation for improved skin brightness and visible clarity", category: "Women", image: Lady3, link: "https://www.amazon.in/Ordinary-Glycolic-Toning-Solution-240ml/dp/B071914GGL/ref=sr_1_5?crid=32SZ0BYAMFIIL&dib=eyJ2IjoiMSJ9.i6S2D7Ea_j1-mtc72pmHaLMQUzwmg8-Gob7g2YlrK2Vsp-NMGymEpNOFArwCkHjCDuf9sf88YBF5WWAjpDYRdY3C7ci50DWs2BcyNXrv8XTYQW9GOCNSbzYdlMheHclh8MedAPhuTEILNmckcFwJ4X6TtD__ykJy-7pf7HsWSu2Ifx2nswrlQVw810JpLpiT-reo81iwAXIiyoSMZLfD0YcEeoVVobKXn0q_CLcKH0AT7KwZnGyJgBhJcXJvatWuQEcLq2c6T3xB2Joc70ebg18X3O2QhNYer9j-X9ARYPT83r0lf3PzjEj9u3lH6H7p53Pa0WhbZQSoy97zU9jppzw9MhbgTAjWU9oaZ_Z6Mu_q-0Y8IeDoEET4-Pi8xWwkd7SHTcI9fMLEOR6CtRU1HeVqkImUonImyzimZ9RCvDJRdzM45_lbIyLLhvagnH57.vHov3U0wMlJ4n3mDOsp0TqWt-i3Kq6OKKTW9PzXxnEE&dib_tag=se&keywords=the+ordinary+glycolic+acid+toning+solution&qid=1743483240&sprefix=the+ordinary+glycolic+acid+toning+solution%2Caps%2C212&sr=8-5" },
  { name: "Skin Radiance Mask", description: "This mask gently exfoliates and removes tan, blackheads, and impurities while brightening the skin. With a unique Anti-Dehydration Shield, it locks in moisture, keeping all skin types hydrated.", category: "Women", image: Lady4, link: "https://www.amazon.in/Foxtale-Glowing-Reduction-Blackheads-Brightening/dp/B0D2RQMS7Q/ref=sr_1_5?crid=78ZTXGK7S3SU&dib=eyJ2IjoiMSJ9.YCyC4YreWuriCqj-m2F-QmoBvZ2HzSoj1dMggrYgq2-aAKuBlUDfIt7a1t2pB3kr936_jysnsULbA9FPzbQ2Xce8u-8KpYkZGoMEvYnWfB2BNXJ3dOkkMK9tMVNTRaqLpxW2wzLCJQzRwEh9eiy3wrnWOF2lEedovizN7THAmzJ7A9O6-0pjXlHDnNYSnyE4g6o1yP_5hZ5b13AkA3GcXSwlKfpO-pyPvQ8RrLcZ_gSWs9BPZgAguoaJf1D3gSyMDbaxiEwqwszXSsu61v7zcbLGZgObYK0aN_dmHzqw2n27DU44K-2ue8PGwjvGuOB9sbMfLgAfdCblif7zgn75wUY-9epMAmxBmbdZdoM2C-J-L8E6doG3NxPrQE58XnGnLYfBaFROE7jr5dfMo-j6trxUapXOW5MEbWdanRERnFMsA_wY7Tbt7coVJp7BAPgW.9aZR3Cvj4n0Qzz-hyiGzGSCMuIlK4tkbza_iv3IRTYM&dib_tag=se&keywords=foxtail+skin+radiance+mask&nsdOptOutParam=true&qid=1743483647&sprefix=foxtale+skin+radiance+mask%2Caps%2C287&sr=8-5" },
  { name: "Mucin Power Essence", description: "COSRX Advanced Snail 96 Mucin Power Essence, with 96% snail secretion filtrate, deeply hydrates, repairs damage, and enhances skin elasticity. Regular use helps and revitalizes the skin for a healthy glow.", category: "Women", image: Lady5, link: "https://www.amazon.in/Cosrx-Advanced-Snail-Mucin-Essence/dp/B00PBX3L7K/ref=sr_1_5?crid=1T8UMIO8HDMNH&dib=eyJ2IjoiMSJ9.oCk99B7yUZX64fB8zDdmYs5duH26KZHMpYZowijed760rmmwyuecvM3a08XixNdZTkGcvLeYPe1CPZ3DFfM73q1dqWijS1Nt-s-3-q3-wfxUD_A3CGkTHfON2Cx5z-NWrJVFOXe5_YkgaWJNIliSnKfVCbiEE5bSDuAYQmP_TYXs0DqqBEcgrVjUNrfxLx1qNZxLiyPZ-SR7Lcx4JPPvgCNv5ZR_urirjTTIusqh4zhALfCoG_qvDx8ogab-9R-vp7OD4lhWJycwRF-83rc8bB-sIwn-4Y6aP0CVlauFMC_DclDu8Yp3hMS1qmBvaBk25Rzbe_YtHRiv6Xc5Y4ifEwn3Wa9eolqbJemuWkGcJbBOazMIp3dEfgQbw00IcFbeeHhzIJPRaXenVKofYx3CGnYOiITvmqdEJQj6CJX9PLcMH455JgeRXzpxo6e1rNe0.cg_qSMguXF7eiYUb1RX440Qk50a-iHV7KK5jVuRX-og&dib_tag=se&keywords=advanced+snail+96+mucin+power+essence&qid=1743483710&sprefix=advanced+snail%2Caps%2C238&sr=8-5" },

  { name: "Anti-Pigmentation Kit", description: "This kit combines exfoliating cleansers, brightening serums, and SPF 50 protection for even-toned, radiant skin.Formulated with high-quality ingredients, it helps reduce pigmentation and protect skin.", category: "Men", image: Men1, link: "https://www.amazon.in/Minimalist-Anti-Pigmentation-Routine-Women-Sunscreen/dp/B0BCSZL5SF/ref=sr_1_8?crid=1I6LJBBC6L4LM&dib=eyJ2IjoiMSJ9.OlaKGNqJvW6_07BLivPNrUDGfmfoA9K5oGhqsbi7EdNqU9K0757ZA1fov_Qa5fOdyuQd5kglbu5iuw5FjVtlk5n_uCOHRoUV6_EBKN0y279yumxLVPzIw8k-7qBGhdIxfAAJbFt8_98C3H4YZqB2EP6_K8njlYtjtBE_a0jEgx7HQXNiBgaC7z_BlCBjxLGnEI6FhRMpxJAkqfsA-l-MIF8ZbI1MaSGMmvdRPBMX3p4QD_n8P6i7Olx9ta-xXj1L83HLiW9FEfiB65TSBH8wAbz1V_BGEc19ScMUZ_YxRBbsG1Llc0aDU8-vIbcB44Dc7FWEI0BH2dARceXe-VLaCUar_allvaH2Rocv9NC3jZFrweErndocwIclgmqjGUwp-Gm0rW5JoFTKtPtPfACKI4bUCRcEzx3rcXm5ggzkDNtKdattM4e-8NBfDodBuOx7.Yzvr0U9We86e91Sl9NLvYVy0XI69m5XE22PwghK6fKg&dib_tag=se&keywords=minimalist+men+skincare+kit&qid=1743486410&sprefix=minimalist+men+skinacre+kit%2Caps%2C236&sr=8-8" },
  { name: "Vitamin C Face Cream ", description: "This skin brightening cream fades dark spots and evens out skin tone. It also boosts collagen production, improving texture and reducing fine lines.", category: "Men", image: Men2, link: "https://www.amazon.in/Blue-Nectar-Ayurvedic-Brightening-Lightening/dp/B077S5KM29/ref=sr_1_4_sspa?crid=1GBQGSQNVH8EW&dib=eyJ2IjoiMSJ9.CTA5YENOQHbtS6z0lKlXDWlRCLel_PSLGXWBLed0FDgKmGxJBOSqk7Jl3MVRBpjT2DNyHjQrPXA09f9G5A4XwMP2ddyf7P_5ZsWZTcz1okQaq2TLTce-Cv_uvrxi_rWeNPCfXZU7LJvV7oStF1Lg_WEMIWghp1EeKtGu25SEgsYPT2DAIqjhdYQoAn9NC5rQ00netBr_Yhv1KLJQDgLtg-SJ4qMHr1K61eoza4TaycLUCyraz-7yP8spX-jbOJVUK1SQnOSagglcOQvXRJSsoy0DqsZief2J2W7PTx-sZb4.k8p8gvBpm_R4RhOuvEHXSRTIppeZMnSSvXhRiBxwtMs&dib_tag=se&keywords=blue+nectar+dai%3By+radiance+cream&qid=1743492402&sprefix=blue+nectar+dai+y+radiance+cream%2Caps%2C229&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { name: "Anti-Aging Serum", description: "This hyaluronic acid serum enhances skin elasticity, restores firmness, and boosts collagen production. Designed for men of all skin types, it absorbs quickly to hydrate, firm, and revitalize the skin.", category: "Men", image: Men3, link: "https://www.amazon.in/Brickell-Mens-Aging-Reviving-Serum/dp/B078JQHPMV/ref=sr_1_5?crid=3O7ERX3GLFGCJ&dib=eyJ2IjoiMSJ9.YrvIlJ2N0SPhKxRZCSFICXt848UU-G7jdjg8pmOkWXkJwFeJdkYulUmHEjHnVzrsZJJSt0A0AwO2u_bIKNdDlev_8QKOVz5UfzpC9BH-1p4aj_P8qDDv-5PG5svF6s8zkTSeDHx6RSfIBxYE7OiCttMF-Zf6UTFiuJrV8L2jiHal4FxmdGyHb1YqqNKDUcWITxD14mUf5Z6kIVeWCDa31fG7PJzOrwLpc1-ISidc0y6ot3qi_EgR7Dy9StLdcgYaZdD-23kllkKVK6xrIxIzv-LwGbpVbf_1QdlYcm_eEb9O-2G-U_9OBd3P3m7ZkKV25MIIinT9Y4pLi2r_MT1U0XI9QFn6bngDaXdNqpZ8eCgmct7EV0eBpEgVYfnlrWDQ-snSp9qkjp21grEoco7u8nFQTVNQM1EhJRd1ghdWWnWd1JFrcnJZGg_Y2y90l4qQ.SWIIECTSL1wB-2CYwwa0dE8hmFowJf7mjz4zCWnVXrc&dib_tag=se&keywords=brickell%2Bhyaluronic%2Bacid%2Bserum&qid=1743486716&sprefix=brickell%2Bhyaluronic%2Bacid%2Bserum%2Caps%2C208&sr=8-5&th=1" },
  { name: "Anti-Pimple Face Wash", description: "This face wash enriched with salicylic acid, combats pimple-causing germs while soothing and healing the skin. Suitable for all skin types, it deeply cleanses and promotes a healthier, clearer complexion.", category: "Men", image:Men4, link: "https://www.amazon.in/Garnier-Anti-Pimple-Repairs-Balances-AcnoFight/dp/B007921JYI/ref=sr_1_5?crid=20N470K4P582I&dib=eyJ2IjoiMSJ9.Nk5A1Z1nVM8i8C4ZGYeOsE3356uqNi4DbygadgkibUL3qv132lZbksE-GxJzxiPbFrs1RA1JwnoNOd7Bkth5rauXSKH7xgeqgg7XjIQRLTutqYy4vQDjjeRpkrrKCcF9MioGdsMzVvqwCFTeRDg3QizqOOW6WQ0YoMfsNP32BSqpAbm9Rj7BqklX0m18ObGjMhLrrRYNzuTS7JFgvhaFeFay9hsBBd_XmgRmGWUMiuHtfG__zpZO1vLCe-axOunWR-dWRz73vfuRKdVnLFB7gCTS9QoTY38tp8ekJ7INc0nPU1WeZlIQfvdDx9k9NAmgt2DtqEMFK4leNBq_p_7pvLDt5eXCWS3NE3A7Z_kp5u544JhDD52ahI1C7Yh-cIuCy82oY98LHpf0HUB3gTm5InUrtXdXx96O4rY_4GLl_VjBbJ-l8SjjkbU66eZ6iyCU.A-ozmIiy-be0z59RQ0A4u2UqKa4sFqmXaGakbLGeGvI&dib_tag=se&keywords=garnier%2Banti%2Bpimple%2Bface%2Bwash&qid=1743492625&sprefix=garnier%2Banti%2Bpimple%2Bface%2Bwash%2Caps%2C223&sr=8-5&th=1" },
  { name: "De-tan Facial Kit", description: "This 4-step charcoal de-tan facial kit deeply detoxifies, removes blackheads, and controls excess oil for clear skin. Powered by activated charcoal, it unclogs pores, exfoliates, and leaves the skin feeling smooth and non-sticky.", category: "Men", image: Men5, link: "https://www.amazon.in/Man-Company-Whitehead-Blackhead-Cleansing/dp/B09GFV464X/ref=sr_1_6?crid=205WOMZ6O96SE&dib=eyJ2IjoiMSJ9.nmVUdKuNAUf46woJt49gP6SfCKVSVzsbgO3vdYXfhoJ5BVHJvRp9BWvJBEJ3BgfpyJiLgA9upbsZ13u_tAaOzQVFirNMLQnCmdU3rzrknNn3EWgFHD_7PdeX0hEJmkYTZRsTBtX14-XfwCXyBGv3TSNNTXU9xgd5wdJUu8hwnD0u6Uy0gf--fdvPDE1THhO83YGPtx_f3ki4jd50JS0Gz39sQK568WsEqiBs1nCnoASnqlCO2AI6IZCtNLeiI-0YgRXnPHC6elscJGbHw450s4jb99h_kRIzkynWtUKLQTqHqjjB8BhbKtoc2rxwzQRo77z3x5p_KR9GEvof5XdYTIghs7zr4ybsVoZCi17HX9COTX7tSNaATyFriIBhxt1HlpjcKmvq7V6_LMek8DSca44GvDyZzAPn3-TUOwLQyo_IOnhfDddGkXH4_fsNQ8y8.8DB8-pJ1lyROLXN1iCwaKqb5N3FVP4c9DWs5Yteu3Xo&dib_tag=se&keywords=the+man+company+charcoal+kit&nsdOptOutParam=true&qid=1743490727&sprefix=the+man+company+charcoal+kit%2Caps%2C230&sr=8-6" },

  { name: "Baby Moisturizing Cream", description: "Atogla Baby Cream is a daily-use moisturizer that gently nourishes and protects your baby’s soft, delicate skin from rashes and irritation.", category: "Kids", image: Baby1, link: "https://www.amazon.in/Atogla-Tube-100-Gms-Cream/dp/B0895M97JZ/ref=sr_1_5?brandId=berry&crid=WQ7LEJ0G65ZK&dib=eyJ2IjoiMSJ9.Wd5TZHFMMWxMCXEwXA_zSYnfXNChKabDkDfrE-Ett3ccc7yY3u1_CzurK8BfZLJ0mSftcmQewSuYKNj1DxLwM2tdM5nDquv68hVckgk5HS1U88aeyg_eCCT5Hh3DMCgH2XYGa_3Bs0DGNBHBqHWP4aIt9pj1GhPCadCWyAOmr_7XTYyBgLN4lKwm9qKBPkUZRdFINrb_H6NGh4_1FnHFizxM-rEPflljVMiZ8lcVn_dbl6ITtLvgGrbpttMd3Q6hbmCVN5Y2XkzFn9z_e6EIP7sEwxXwVQu9lJZd9FAGW1MDmiZucQmnZFJ0cnsFa6JU7sD7HzYekv53yE8yCrtQfnzx3u3-CKRelAoB3sJXhe1BYCNykz8yuJVGYdK4Pe20SAjeZ2yTQK7PvmcvG0gpNBdgfOZagShPbLK6kBDbwEqcCZNkLVshkjCMgaPKZcuh.BVn9UTz4AB9_p3V33BBN6wkYC5tcKK5HE3-fOdFcH-0&dib_tag=se&keywords=atogla+moisturising+cream&qid=1743484059&sprefix=atogla+moisturising+cream%2Caps%2C228&sr=8-5" },
  { name: "Body Cream (for delicate skin)", description: "Sebamed baby cream is clinically proven to be effective in atopic babies and soothes baby's sensitive skin.", category: "Kids", image: Baby2, link: "https://www.amazon.in/Sebamed-Baby-Cream-Extra-200ml/dp/B0DK9H7MHQ/ref=sr_1_5?crid=A92F5TVDDRIQ&dib=eyJ2IjoiMSJ9.451BdsE8V0gx3V0fG5gY53vlKtnbr0xNN3Tie5cIiO9odGTatb1cuFC1KRs_Ekb0P-TXjYtDDvAqGKBAIzUhVVSJUBnaKWIPymxMif4f0RdTGoPBVVA9bYOAhH_ohGj6CQCyCW1VgB1hJcSx1UU7JbQHQbWhEEglu6MD_9mZ3rY_hrUFR4Q3dKoSgwjgqCUQxTsPYZL-LmbY4mYJqHqufj_k2h5iXbnDZ-R4eWVOzHrAhZH5Uva0eVL6lDIlf-VyPPBc6_B5PB48vFTkBax5Ky_K75LdIPWkE1oCDW-Freu34_xMMZeX6Imm7IzqhkQAxT3qv2zFBLsjy2g3_wG9PhxGTtzICrGKYuWxeS_aPAaJ9ZOZyEiSwLiudeaicRvCQW5Cdd3U2xVaZDuOAfTou4naWVgzA5BMKDpXDetLhcz5u70dWxSZAd6D7pjQGzWJ.JUUrBTsml7DM2tFtirwX7ISII6haTD6IPDN4tcYdIlM&dib_tag=se&keywords=sebamed+baby+cream&qid=1743484153&sprefix=sebamed+baby+cream%2Caps%2C234&sr=8-5" },
  { name: "Foaming Baby Wash", description: "Citta's baby body wash, enriched with Aloe Vera and Coconut Oil, gently cleanses without dryness, making it perfect for newborn care.", category: "Kids", image: Baby3, link: "https://www.amazon.in/CITTA-Foaming-NATURAL-Coconut-extract/dp/B0969Z1YP9/ref=sr_1_1_sspa?crid=2SFEJHUPW6MJJ&dib=eyJ2IjoiMSJ9.KfWDduePH5VyOajszkhsLLalb81Kqekip9hbd8vVBw6oaZbD4Y--y4yAqDyMaEHil7rAhtnFytNgTAd5F5yTR1pzW-Cn1FH_rPAHMIT1ZYVV_EJfIRVChSyp3v7-e_bJDdXI3-2NQkxrMuv2IMoJH88B_Zja1ZIcm1EC6fBA6IQt2U4COer5uiIyG2od9lDsX7ZSTwCcS42FzbhHkCNNyIK3ifJysl3TPb6_DJrrikxt9LQb0jKIZICHFWhzyPk7atkcmnzjJaMouK9nUZegJJ_xA7ybo1d8rgcHSQbi6Po.zIbcAn7PL9Z2WCYSFOecTwBiiSGqr50UGzSuQEtxHXY&dib_tag=se&keywords=citta+tender+foaming+baby+wash&qid=1743484224&sprefix=citta+tender+foaming+baby+wash%2Caps%2C208&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { name: "Face and Body Lotion", description: "Clinically proven to hydrate for 48 hours, this hypoallergenic formula soothes dry, itchy skin and strengthens the skin barrier.", category: "Kids", image: Baby4, link: "https://www.amazon.in/Long-Lasting-Dermatologist-Dermatologically-Non-Comedogenic-Cruelty-Free/dp/B0BPD83JK2/ref=sr_1_1_sspa?crid=2FMZ9OM86DNUG&dib=eyJ2IjoiMSJ9.ag9qY6irCUn_xPPLwDbYh6LDZFfkSkQAPebEOzLPvtRpTfFrh3KfWc5oGWR_4M_9hq9MJBQNnSdcHO8cSWnf7hakD17n2kaXbkUn9PIp-wiZmLe_1anEnMi4nHn_GOOfOtyH1akdcXE_98b_KyUKrUtivX1CkL59ORGnRCoKA5deVrfQjd_v79UYChT3TGspmtKIQ2Z9xZAM1EgQrstDUtZ3MIPzih9WVu0tWM3FV0WaBxvsVFOO4APCMF7a2z9qsVbB7-dnRiNUqJPJobPukBm0wA7RVsHmRkMU9CRW2tc.5I1fmxZA0xXjLLVuC4wVtx4K7eKMVNnd1ZqQ6yrlzRE&dib_tag=se&keywords=moiz+face+and+body+lotion&qid=1743484291&sprefix=moiz+face+%2Caps%2C222&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
  { name: "Nourishing Massage Oil", description: "Specially formulated for delicate baby skin, this oil provides a soothing and bonding massage experience, promoting relaxation and comfort for your little one.", category: "Kids", image: Baby5, link: "https://www.amazon.in/MTL00035-Mustela-Massage-Oil-100ml/dp/B01BL87430/ref=sr_1_1_sspa?crid=O22R9Z7467GZ&dib=eyJ2IjoiMSJ9.19YKFEgmPOPxmXyB4GZ5jzuyracDat2QabVEHoqVlD4B7G2mQO6h5edV4bkyfOSMOF4tr7vgN4KvN5jDR6aNphrOg9H3BkQYqjuQzoPEqkCpYiU0XSgIAa_tsfI2hpME1ohIwvknpNLPA6Q1bFrsQbNXBp3ln6bJhH0qPDeWgi6jjfRL05NSRAk4TGwZaHJsiETCUhtvUKq_F1ub2_jChbSeqRLUbUU8hL3YYEBM0fFyWnpXzooQQ_o3GrTtGoSg9xT2jjiHubLzUxO6WTuKgwPVpZU66tNt1jPVMBx7eno.Hq-q5vJ_MdGKVmiZItyGucEIUKV3li-9Ju_9QGR1JT0&dib_tag=se&keywords=mustela+baby+oil&qid=1743484478&sprefix=mu%2Caps%2C218&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" }
];

const Products = () => {
  const [favorites, setFavorites] = useState([]);
  const [flippedStates, setFlippedStates] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.name]: false }), {})
  );

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("storage"));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.name === product.name)) {
        return prevFavorites.filter((fav) => fav.name !== product.name);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const toggleFlip = (productName) => {
    setFlippedStates((prevStates) => ({
      ...prevStates,
      [productName]: !prevStates[productName],
    }));
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Dermatologist-Backed Recommendations</h2>
        {["Women", "Men", "Kids"].map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {products
                .filter((product) => product.category === category)
                .map((product) => {
                  const isFavorite = favorites.some((fav) => fav.name === product.name);
                  return (
                    <div key={product.name} className="relative w-48 h-64">
                      <div
                        className={`w-full h-full rounded-lg shadow-lg transition-transform transform ${flippedStates[product.name] ? 'rotate-y-180' : ''} relative`}
                      >
                        {!flippedStates[product.name] ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                            <p className="text-gray-800 text-center px-4">{product.description}</p>
                          </div>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 flex flex-col space-y-2">
                        <button
                          title="Add to Favorites"
                          onClick={() => toggleFavorite(product)}
                          className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition ${
                            isFavorite ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-black hover:text-white"
                          }`}
                        >
                          <IonIcon icon={starOutline} size="large" />
                        </button>
                        <button
                          title="Flip"
                          onClick={() => toggleFlip(product.name)}
                          className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full text-gray-600 hover:bg-black hover:text-white transition"
                        >
                          <IonIcon icon={repeatOutline} size="large" />
                        </button>
                      </div>
                      <a href={product.link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-lg font-medium text-gray-800 text-center hover:text-blue-500">
                        {product.name}
                      </a>
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
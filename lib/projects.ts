/**
 * PROJECTS DATA
 * 
 * HOW TO ADD YOUR CLOUDINARY IMAGES:
 * 
 * 1. Upload your images to Cloudinary
 * 2. Get the Cloudinary URL (should look like: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/...)
 * 3. Replace the placeholder URLs below with your Cloudinary URLs
 * 
 * CLOUDINARY URL FORMAT:
 * https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/folder/image-name.jpg
 * 
 * You can also add transformations:
 * https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_1920,q_auto,f_auto/v1234567890/folder/image-name.jpg
 * 
 * Recommended transformations:
 * - w_1920 (max width 1920px)
 * - q_auto (automatic quality)
 * - f_auto (automatic format - webp/jpg)
 */

export interface Project {
  id: string;
  name: string;
  location: string;
  year: string;
  type: string;
  accent: string; // Hex color for this project
  hero: string; // Main hero image
  images: string[]; // Array of 25 images for the project page
}

export const projects: Project[] = [
  {
    id: 'casa-karen',
    name: 'Casa Karen',
    location: 'Cabo',
    year: '2018',
    type: 'Beach House',
    accent: '#e8b4a0',

    hero: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143029/casa-karen-los-cabos-mexico-luxury-real-estate-20_mn6hum_k6ydhj.jpg',

    images: [
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143029/casa-karen-los-cabos-mexico-luxury-real-estate-20_mn6hum_k6ydhj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143001/casa-karen-los-cabos-mexico-luxury-real-estate_jlla1m_bl2v7i.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1774143002/casa-karen-los-cabos-mexico-luxury-real-estate-2_aup3t8_kcydki.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143007/casa-karen-los-cabos-mexico-luxury-real-estate-5_tspwxf_vkvtee.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143004/casa-karen-los-cabos-mexico-luxury-real-estate-3_wh7n7x_sm4dzb.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143005/casa-karen-los-cabos-mexico-luxury-real-estate-4_tgmuuk_ib2vzo.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1774143008/casa-karen-los-cabos-mexico-luxury-real-estate-6_clwksz_pesnwz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143010/casa-karen-los-cabos-mexico-luxury-real-estate-7_oqslp2_yv0qzh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143011/casa-karen-los-cabos-mexico-luxury-real-estate-8_xerkmm_i2iz9y.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143016/casa-karen-los-cabos-mexico-luxury-real-estate-11_m4wbwv_nwllj9.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143013/casa-karen-los-cabos-mexico-luxury-real-estate-9_oqv2oc_ooubnj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1774143015/casa-karen-los-cabos-mexico-luxury-real-estate-10_nzgyol_zltbwt.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143018/casa-karen-los-cabos-mexico-luxury-real-estate-12_ay7k6z_wrw9qh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143019/casa-karen-los-cabos-mexico-luxury-real-estate-14_rgdinb_e0evm6.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143024/casa-karen-los-cabos-mexico-luxury-real-estate-17_sqkgbm_mvzn0c.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143021/casa-karen-los-cabos-mexico-luxury-real-estate-15_iv4bat_goybtm.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1774143022/casa-karen-los-cabos-mexico-luxury-real-estate-16_re2c8j_q7z3us.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143026/casa-karen-los-cabos-mexico-luxury-real-estate-18_eopvsj_g9n2yk.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143028/casa-karen-los-cabos-mexico-luxury-real-estate-19_iahwzq_dp1oqw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143029/casa-karen-los-cabos-mexico-luxury-real-estate-20_mn6hum_k6ydhj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143001/casa-karen-los-cabos-mexico-luxury-real-estate_jlla1m_bl2v7i.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1774143019/casa-karen-los-cabos-mexico-luxury-real-estate-14_rgdinb_e0evm6.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1774143024/casa-karen-los-cabos-mexico-luxury-real-estate-17_sqkgbm_mvzn0c.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143021/casa-karen-los-cabos-mexico-luxury-real-estate-15_iv4bat_goybtm.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1774143028/casa-karen-los-cabos-mexico-luxury-real-estate-19_iahwzq_dp1oqw.jpg',
    ],
  },
  
  {
    id: 'rancho-espiritu',
    name: 'Rancho Espíritu',
    location: 'El Sauzal',
    year: '2020',
    type: 'Eco Lodge',
    accent: '#c97854',
    
    hero: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066864/rancho-espiritu-los-cabos-mexico01_xofj8m_uiofrd.jpg',
    
    images: [
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066864/rancho-espiritu-los-cabos-mexico01_xofj8m_uiofrd.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066861/rancho-espiritu-los-cabos-mexico09_gqbt91_liglll.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066862/rancho-espiritu-los-cabos-mexico08_is9pqz_b7lm66.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066863/rancho-espiritu-los-cabos-mexico07_ndch4t_nhtqmw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066861/rancho-espiritu-los-cabos-mexico09_gqbt91_liglll.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066861/rancho-espiritu-los-cabos-mexico10_nmxbvo_q71dkh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066859/rancho-espiritu-los-cabos-mexico12_b1zk9k_cuamy8.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066860/rancho-espiritu-los-cabos-mexico11_jhscfs_uspniz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066858/rancho-espiritu-los-cabos-mexico13_df7d1k_z9fe17.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066857/rancho-espiritu-los-cabos-mexico14_bf8thr_sbofmg.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066851/rancho-espiritu-los-cabos-mexico23_pcarzl_tsxcqn.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066845/rancho-espiritu-los-cabos-mexico37_egxe2z_raubyh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066853/rancho-espiritu-los-cabos-mexico20_ebqruw_dlz0rh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066845/rancho-espiritu-los-cabos-mexico39_lh06mq_a6mjur.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066855/rancho-espiritu-los-cabos-mexico16_wjoevm_fnzjui.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066847/rancho-espiritu-los-cabos-mexico31_a7kjyl_gyug58.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066851/rancho-espiritu-los-cabos-mexico24_aaggvm_qq19xz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066850/rancho-espiritu-los-cabos-mexico26_zjmgji_ksbdy9.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066849/rancho-espiritu-los-cabos-mexico28_hlp6pj_fnvacg.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066843/rancho-espiritu-los-cabos-mexico51_vtywho_qhkt2a.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066845/rancho-espiritu-los-cabos-mexico39_lh06mq_a6mjur.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066844/rancho-espiritu-los-cabos-mexico50_vurshb_opyavm.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066843/rancho-espiritu-los-cabos-mexico52_cfi8ar_uoohqj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066847/rancho-espiritu-los-cabos-mexico31_a7kjyl_gyug58.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066846/rancho-espiritu-los-cabos-mexico36_lvamiy_hx69xu.jpg',
    ],
  },
  
  {
    id: 'el-parque-08',
    name: 'El Parque 08',
    location: 'Querencia',
    year: '2022',
    type: 'Modern Home',
    accent: '#8b7355',

    hero: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066573/YBV2022_-_6SUNSET_cpexj7.jpg',

    images: [
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066613/YBV2022_-_10_jmtele.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066612/YBV2022_-_13_vj19fx.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066610/YBV2022_-_17_lhqmbg.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066610/YBV2022_-_18_d01tr8.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066609/YBV2022_-_19_y1jjfc.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066608/YBV2022_-_20_fmss7f.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066607/YBV2022_-_21_ogthnz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066606/YBV2022_-_23_wjfaus.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066606/YBV2022_-_25_f52yaw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066604/YBV2022_-_28_uytw33.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066603/YBV2022_-_31_wxj4z0.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066600/YBV2022_-_36_rnshsx.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066599/YBV2022_-_39_-_copia_gobwwg.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066596/YBV2022_-_40_beadsz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066595/YBV2022_-_41_vr2j9q.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066593/YBV2022_-_45_lmwuxk.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066590/YBV2022_-_49_qyj2hn.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066587/YBV2022_-_51_fftdht.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066586/YBV2022_-_53_iyscmb.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066573/YBV2022_-_6SUNSET_cpexj7.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066571/YBV2022_-_8SUNSET_kutybe.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066561/YBV2022-SUNSET_t0hmwt.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066572/YBV2022_-_70_bm6uq6.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066577/YBV2022_-_64_wl7ugm.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066576/YBV2022_-_66_j3mops.jpg',
    ],
  },
  
  {
    id: 'cresta-del-mar',
    name: 'Cresta del Mar',
    location: 'Querencia',
    year: '2021',
    type: 'Ocean View',
    accent: '#6b8e9f',

    hero: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066483/DRON_1_fqg5c9.jpg',

    images: [
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066472/YMA_0187_il6qxw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066472/YMA_0195_ot0xnz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066472/YMA_0137_asvo1f.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066483/DRON_1_fqg5c9.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066483/IMG_7818_oscka0.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066482/IMG_7823_wdjhi7.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066481/IMG_7826_uwoygq.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066486/IMG_7831_dqt9lw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066480/IMG_7836_p0m0j1.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066480/IMG_7838_wjbwld.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066479/IMG_7848_d9fez4.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066479/IMG_7862_vef4eq.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066478/IMG_7864_ztfdlk.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066478/IMG_7866_huwjtu.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066478/IMG_7872_b84fho.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066477/IMG_7879_l1a47v.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066476/IMG_7886_zh9io6.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066476/IMG_7887_y5pn6w.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066475/IMG_7889_vlfesh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066475/IMG_7896_xglkuy.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066474/IMG_7912_owlxxk.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066474/IMG_7914_p1sebw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066473/IMG_7915_jwymk0.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066473/thumbnail_DSC_0461_2_dtj1f0.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066472/thumbnail_DSC_0466_2_drzrxt.jpg',
    ],
  },
  
  {
    id: 'casa-agradecida',
    name: 'Casa Agradecida',
    location: 'El Estable',
    year: '2019',
    type: 'Sanctuary',
    accent: '#a67c52',

    hero: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066778/YMA_0665_rqfds0.jpg',

    images: [
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066778/YMA_0665_rqfds0.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066777/YMA_0670_kvhupv.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066777/YMA_0673_z2bvog.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066783/YMA_0677_eucod1.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066775/YMA_0679_t4em74.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066774/YMA_0683_ft14yp.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066774/YMA_0688_evixmy.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066773/YMA_0693_ozewux.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066772/YMA_0701_cjijpv.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066771/YMA_0705_fzz9hv.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066770/YMA_0708_rqqfds.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066770/YMA_0710_hft9wi.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066769/YMA_0714_iwfzlk.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066768/YMA_0719_ppznds.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066767/YMA_0721_gexef5.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066767/YMA_0729_vxthjv.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066767/YMA_0732_wqwuzj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066765/YMA_0748_aoequl.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066764/YMA_0755_perezt.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066764/YMA_0767_ltqwri.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066762/YMA_0773_gddimj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066761/YMA_0774_pc07lp.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066760/YMA_0780_kwtaow.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066760/YMA_0789_hrdydc.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066759/YMA_0792_jfvxwj.jpg',
    ],
  },
];

// Helper function to get next project
export function getNextProject(currentId: string): Project | null {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return null;
  return projects[currentIndex + 1];
}

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

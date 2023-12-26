/**
 * @author DHENRY for mytinydc.com
 * @license AGPL3
 */

import { BEARERDEF } from "./Constants";
import { UptoDateOrNotState, UptodateForm } from "./Global.types";

export const STORYBOOK_UPDATEORNOTSTATE: UptoDateOrNotState = {
  name: "xxxxx",
  githubLatestRelease: "1.8.9",
  productionVersion: "v1.8.9",
  state: true,
  strictlyEqual: false,
  githubLatestReleaseIncludesProductionVersion: true,
  productionVersionIncludesGithubLatestRelease: false,
  urlGitHub: "https://github.com/",
  urlProduction: "https://test.com",
};

export const STORYBOOK_UPTODATEFORM: UptodateForm = {
  urlProduction: "https://test.com",
  scrapTypeProduction: "text",
  exprProduction: "version: (v[\\d.]+)",
  urlGitHub: "https://github.com/",
  exprGithub: "",
  urlCronJobMonitoring: "https://monitoring.service/state/",
  httpMethodCronJobMonitoring: "GET",
  urlCronJobMonitoringAuth: `${BEARERDEF} xxxxxxx`,
  urlCICD: "https://uricicd/jobs/xxxxx",
  httpMethodCICD: "GET",
  urlCICDAuth: `${BEARERDEF} xxxxxxx`,
  name: "storybook",
  isPause: false,
  compareResult: null,
  logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QBCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAkAAAAMAAAABAAAAAEABAAEAAAABAAAAAAAAAAAAAP/bAEMACwkJBwkJBwkJCQkLCQkJCQkJCwkLCwwLCwsMDRAMEQ4NDgwSGRIlGh0lHRkfHCkpFiU3NTYaKjI+LSkwGTshE//bAEMBBwgICwkLFQsLFSwdGR0sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLP/AABEIAMgAyAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APXKKKKACiiigAoopCQoJPT8/wAABQAtISB198Ack454A5pPnOf4R2IwW69eeP8APalCqM4HJxk9zjjk0AGWOMLx33Eg4xnIGP8ACjDZUlzwOVAXaT+IJ/WlqGe6s7VQ9zcQwqehmdUz9NxpN23HGLk7JXZKqqg2qMDLHueWJY9aWsSfxT4ehzi5aVh/DBG7f+PMAv61Qfxtpg+5aXbf73lL/JjWLxFKO8jvhlmLqaxpv8vzOqorkv8AhN7L/nxuP+/iU9PG2ln/AFlpeL/ueU382FL61S/mNHlGNX/Lt/h/mdSyqwwwyMg/iDkdKMNliHPOMAgFR9MYP61jQeKPD02M3RiY/wAM8br+bAFf1rVgurS6XfbTwzL3MLq4HsdprWNSMvhdzjq4atR/iQa9UP3MMll4BONuWOAM5Ixn8s04EHp/gRxnkGikKqcEjkdD0Iz6Ec1Zzi0U35lHJLAdTgbvyAxTgQwyDx/ng0AFFFFABRRRQAUUUUAFFFFABRRSEknA/E+n/wBf/P1AAnkADJP5AD1P+f8AAC4wTy3PJHrzge1AAAwPxPcn1NLQAVHPPBbQy3E7hIYlLux6AD6VJXF+Nb5t1npyMQu37TPg8NklEB+mCfy9KxrVPZQcjtwOFeLrxpd9/Qz9U8V6ldvJHZs1rbdF2YE7j1ZxyPw/M1zzySSMXkd3c9WdizH6k802ivBnUlUd5M/SsPhaOGjy0o2CiiiszpCiiigApySSxMHjd0cdGRirD6Ec02igTV9GdJpXizUbR0jvma6tuhLYM6D1Dnr+P516BDNDcRRTwurxSqHRl6EGvG67XwVfSMLzT3OVjUXMPqoJCuPpkqfxPrXpYTES5uSTufKZ3ldNUniKKs1vbqdlSFRkkcMcZIHXHrS0V6x8WIDyQRggZ9iPY/5/XlaRgGGPxBHUH1FKM9D+B9fr/n/6wAUUUUAFFFFABRRSEhQSen9TwAKAAk8ADJJ+gA7nP+f8AAAYH4nuT6mhRjJP3mwW5z+APp+H86hurqCzheaY4VeAB9527Ko9aBxTk7InorjrvWtQuSwjcwRZ4WI4bH+045/lVEXN2DkXE4PqJHz+ea1VNnpxy2bV5Ox39eeeMUZdWViDte0hKntwzqa17LXruFlW5Jmh6EnHmqPUN3/H86s+JNOXVtPivLQh5bZWlj2DJlibG9RjnIxkfQjvXFjKUpU2kdmW3wOLi6uz0v6nndFFFfPn6AFFFFABRRRQAUUUUAFdP4KVjqd04+6tlICfdpY8D9DXMV6N4c01dJ097m6+Se5CyzZ6xxj7iY9ecn647V04aPv8z0S1Z42dV40sLKHWWiR0NFc9datcyllhJij6DH3z7lv8Ko+fcE586XPrvbP868/EcVYenPlpRcl32+4+Pp5XUkrydjr6QqGxnscg9wR3Fc5b6peQlQ7GWPushy2PZutdBBPFcRpLGcq35g9wa9fLs4w+YXVPSS6Pf/gnHiMJUw+stu49S2CG6g4JHQ+4paRgTyMbh0J9O4/H/PSlBBAI7+owfxBr2DkCiiigApvDN14Q8jn72AR+X+elKxCgn6Adsk8Ac0KCFAJBOOSBjJ7nFACkgAk8AckmuM1a/a+uDtJ+zxErEOx9X/GtvXrzyLYW6H95c5DeqxDr+fT865Otqcep7WX0LL2svkFFFFanrhWxo2p/ZZPs8zf6PK3BJ4ic9/oe/wDnOPT4opZpEiiUvI5wqjqTSautTKrTjUg4z2GeKNH+wXP2uBcWl25OB0imPzFfoeo/H0qGw8M6ldoJ7lksrUgMJLj77A91jyD+ZFdzbWUj2RstR8mdV2YAJYhQQyhsgdMcf5zn6x54ufm3eVtXyuu3gc47Zr5PNpRwFN4hR5le1vXv5FYbNa04rDRa5l9re66W8/UoRaX4XsyoEE19KMfNMxEZb2VcD9DWnGbtcfZNJtoF7YgVT+fyj9K0dOjRbaF/s6ROwOcDkjPBy3zc/WoNY1F7GKNYsefMWCE8hFXGWx/L/wCtTw+CxOJhGpOtyqSvaMUvxd2eZUxUqtX2dnJ/3nf8FoR7/EGP+PeLHp+6/luqGQ3TA/a9Itp175gVj+fzD9Kwv7R1Pf5n2u43Zz/rG2/98/d/Suo0jUWv4XEuPPhID7RgMrZwwH55/wDr11SyirBXjiJ/Np/hYdVSoR53CNvK6/UwJdK8L3m4eVNYTHo0bFog3urZH6CsXUPDWpWaG4hKXlqAWMtvyVUckunX8ia77UY4zbTSeQkjqBjI+YDPJyvPH1rM0fzzcNtz5OxvNHO3kcfjXj1K1XD4uGDrpT59pJWa9Vs/Ox3YXMa0aTqwlouknf7nujnfCuj/AG25+23C/wCi2rgoGHyyzDkDnsvU/hXQanffaX8qM/uIz1H8bev09K05rMx2i2dgIoUw2VyQSCdxC49e9c66PGzI6lXU4YHqDXDxDXq4aksNBNRe8u/khwxCx9d15PbRLsu/qxtFFFfCncFXtNvDazBXP7mUgPnop7N/jVGiujDYieFqxrU3qjOpTjVi4S2Z2dN+63s/PJ6MAOB9ev4e9UNKuvPg8tjmSHC890/hP9K0GGRj3BHXqDkdK/ZcJiYYujGvDZr+l8j4+rTdKbhLoLRSKchTgjIBweoz2NFdRkB5KjHHLE8YyMYBz+f4UtIM5clQOQFPGWXAP881V1Kc29jdyg4byyiHvuc7AR+dC1KjFykorqclqd19rvJ5R9wHy4/9xOAfx6/jVOiiutaH1sIqEVFdAooooKFAJIABJJwAOSSa0rm4/sO3it7dfM1u+VQoUbzbo5wAF9T0Hv7Dk01YbeO71W5UmCwQsg/vzH7qjPfp+JFTeGrKW9nuNfvvnmnkcWobOEA+Uuuew+6v0NcWJqSbVKG7/BGE5wSlUqawj0/ml0Xp1Zztnb6zaa7bQAy/bRcQtMcsdyvtdy57rgnJr00gHqAe/NUNU1G20u2a6lXc5IjiQcNI5527sdOpP+c8onjHVBKGkt7Vod3MaB1bb7OWPP4V0YHKa04SlT1XmfPZpnEMROHOrNK2n9fcjY1rVLqKdrS3cxhFUyuvDksAwAPbtWDJNcTbTNLJIVBCmR2YgH03Vo6mIrxIdWtSWguVVZBj5opVAXa/8v8A9fOVWijy6Nao9vBKm6MZQCpI57iHd5Mske7G7y3ZM46Z2mpPsr/Y/tm5dn2j7Pt53Z2b8+lV6e513UtDo9F1S4lmFpcuZN6sYnblwVG4qx78Z/z06EADoAPpXH6d5NjFNrF2SsFurJAoxumlYFdqA/l/+qqL+NNVMxZLe1EO7iNhIzbfQuGHP4fhXBiK9OlKzPOlllXFVJPDrRb9FcpXEOs3GtXEf777f50zxkllYBNzrsbsMfd7V0NndjWreSOVQmrWYIlXG0zIp25x69j7/Xjc0vUbbVbVLyFSpy0UiNgtG64JUkduhH1/LD8Q2kun3Vvr1kMPHIq3aj7rZ+UM2Ox+631FefiMJTxFFxnrGX9XXmj5ONGtlVV1U3dP3l5f8Arcjg0VcvBDMttf2+PIvUEnH8Mn8Sn39fcGqdfk+MwssJWlRn0/FdH8z9BoVo16aqR2YUUUVyGxb0+f7PdRMThHPlyem1u5+nBrqK4yuss5fPtreTuUAb/eX5TX33CeKbU8M+mq/J/oeFmtLWNRehMowXHYncMDAGeo/PJ/Gigj5kbBPDL2wAecnP0/WivuTwwVVRQq5wM4ySTzz1PNYniSQrb2sQP+smLn3CLj+tblcx4kcm4tI/7sLP8A99tj+lXD4jswUeavEwqKKK6D6UKKKmtYhNc2sR6STRo30LAGgTdldk+sI/k6BoMDYlu3S4uPYyHau7HYfN/3yKt6zrjaT5Ol6aqK1vFGjyMobyxtG1VU8Zxgkn1/JIFF74xu5DylhAdnpuVFix+bMfwrB8QwTQavf+Zn97J58ZPRkfkY+nT8KvJKFPE4mc6uvZeh8xn1edGhSpQ7cz9Za/lYr3uq6nqCxJeT+asbMyfu40wWGD/q1FUqKt2NhNqDyRwy26yqoKJPII2lJONseRgmvubU6MNLJI+K96pLuy5oeppZyyWt182n3mI51JOI2PAlH07/AP1qvXto9nO0RO5CA8Ljo8Z6EH+dYt1pmqWWTc2k0ag43ld0f/fa5X9a3NHuk1O1/sm5YC5hDPp0rnqAMmEn+Xt/u8+FmWGjUX1mlr3t+Z9Dk2PeGqewq7P8Cx/zAh/2E/8A2jVaxs3vJxHnbEo3zyHAEcY6nJ/StY6XqH9lC28tfPF59o2b0zs8vZ1zjP41j65eJptr/Y1qwM8oV9SlX0YZEIPX6+3+8a+XrV40YOTPssNevJ0qL1bfyXf+upm67qq38yW9t8un2eY7ZRwHI4Mp+vb/AOuaxqu2mlatfYNraTSKTgPt2x5/33wv60l/YS6fJHFNNbPIy7nW3lEhiOcbZMDANfNT55t1JH1tB0KKWHptXXTr6sfZavqunJJHZ3HlJI4dx5cT5YDH/LRTXVaLrp1kT6TqYQyXEMixyoAvmDbypUcbhyQfb254atjw1BPPrFgY1OIHM0rDoqKD1+vA/GtKFWamop6djjzPA4arh6k5xSdm79djd0QyG11rR5hmWwleaH1+VirgD6j/AMepKsOfsnjBNvCX0ADjsd0ZH80FRSp5csyf3JHT/vkkV8zxRQUZU6q84v5ar8z4nh6o/ZToP7LGUUUV8afThW/osm63lj7xy5/Bh/8ArrArX0Nv3l0vqiN+RI/rX0HDtV08wgu91+H+aODMI82HfkbMyNJG6K21jjB54wQe1FPor9XPlQrlPEX/AB/Rf9e0f/ob11dc54ktzutbodCpgf2IJdf6/lV09zuwEkqyuc9RRRXQfRhV3SxnULH/AK6g/kCapVa09wl9YseALiIE+gLYoexnV1hL0Zd8P/N4g8UMeomuB+H2hv8ACtHxQlr/AGVPLLCskqFFgY5DRs7BchhzXKald3+j6zrgtX8t7l9xfaCQkhE2V3cd8V1tmsuuaBCt/lZLqJgzhQDlJDslC9OwP/6687LcRGnWSd9Hd/eeZneDnOksSrcskkv/AAE85orek8Ka4sxjRIXjzxMJVVMepVvm/Q0f2XoNkSdS1VZXXrb6eN7Fh2MhyPzAr9Aq5nhaUeaU0fnroVF8St66FC01nV7PiG6kMeMGOX97Hj02vkD8MV1+gSNefaL2fS4LadERI7iKJolnWQncVB4yMDJz3/Pnv7b02zG3StKhR/8An4vf30v1Azx/31+FX9H1TV5pLvVL+6YadaxMsqlFCSO2NscSrgbunP4fxV8xjM2w9e8KMLN9djpw9aMZqLlzfkvO77HW1heIXWxEV/BpUFzdSgpLcTQtKsCx42swHGTng5HTv2vW+r2VxYrfpHOI2lMOxtm7eBnscYqG8u72KWO5gmJtp0XyxgFBgcqVPf8Az2r5XMszoYeDvdtWvbVpPrr06fM+vy2MpTjVjrF+bSflp9/yOEvNa1i+4nu5PLxgRRHyogPTamAfxzWfXdzf2PfD/T9OiL/89rX91J9Ttxn8TWfN4YsJznTdRVSekN6MNn0DqP8A2U15FLGUMU/3dRN9no/x/S59tQzChSXLKHJ8rr71+qRyleleFktP7ItpYbdIpHLrOy5LSPGxXcWbnnrjtmuWi8Ia883lyJDFHnmYyoy49Qqkt+grrLxH0PQZUsM77WJArkBjl5BvkIOR3J//AFV7GEpShJzktLHkcQ5hQlh1GnK7307JGdrHHifw8w6lIFP086T/ABNF6ALu7x/z2kP5nNZGlXV7quuaO9y/mSW6kF9oB2R+ZKC23jvitS5bfcXLf3ppCPoWNfNcUTUqMPOT/I+Z4cn7WdWpHZv/ACIqKKK+DPsArV0T/j4n/wCuP/swrKra0SFh585HykCNffuf6V7eQwlPMKfL0u/wOLHSSw8rmzRRRX64fJiKwYBhnB9QQfToeaZPBFcwyQyjKSDB9R3BB9RTxnc4JzyCox0UjGPzBpaBptO6OLvtKvLJmJUyQdVlQZAH+2B0rPr0Sq8sOnorzTQ2yqgLPJIkYCgdSWIraNR7WPWp5k0vfRw8UFxOdsMUkh77FLY+uK07fQdSkwzlIACCNzZf6gJn+YqW78Xadb7orGBpiuQrn91Dn1AxuP5CucvPEGtXoKvcGKM/8s7b92PoSPmP4mvVo5biaurXKvP/ACPOxHEEY6U1+p3klpp0yK+oJZ3MtquJJZIkG3A3fMCTj1xmpba+065YxW0yMyLwgVlwo4+UMBx9K5Pw/N9r0zVdLXi4z9rjOeZRlMrz34A/4F7Vd0KzWW4W484K9szb4tpD8gqDn0/wrz8Rhfq9SUH0/EvDSjisM6s5PTp0RS8X6hc/aItPR2SBYlllCkjzHcnAbHYf1/Lk67/xNoyXsRvklSKa1hbzDJnY8S5fGRnkc4471wFeFXTU9T4zMITjWbn129C1YWU+oXUNrCPmkPzMRlY0H3nb2H+etXtYvbdxDptjxp9llVI6zzdGlY/nj/6/GZDcXNv5whlePzomhl2HG6NiCVNRVlzWVkciqKMOWO73/wAjsNL/AORdi/7CEn/oJq5ZzRsr2dwf3Ex+Vjj91J2YZqnpf/Iuxf8AYQk/9BNJXxOdV5YfHqcdfdV10a6p+p+n5LBVMvhFkk0MkErxSDDIcexHYj61HTpJJZSpkYsVUICeu0dBTa+Zq8jm/Z/D0vue7G9lzbmzo1xKzS27MWRU8xM87cEKQPzq3earo9m/2e8uY0d15jZXf5W4+YKDgH3pNNshbIZS4eSVVIK/dCHkAZrk/FGniG9NyLjzJL518u3CkyDChDznp0A4/lX7TwtgpSw8KOLk07O3V+S69D4rNq6jNzoq510Nrp0KFtPS0ge6TdHLFGhLqQGyuMZHesubSL5MlNso/wBk4b8Q2P51ha232HT9F0kuWubcG6nYHmJpNxCAj6n8h61UsvEmt2YVRP58Y/guQZOPQPnf+tedm2X4TGVHCo37t0mn+mxxUM6+pTdNRsuptSRTRHEsbof9tSM/TNMq9Z+LdLudsV5E1uzYBZsSQ59yBkf98/jXQJFZkLJHFAQwDK6ImGB5BBAr5uXCim70q2nmtfz/AMj6KhnlOtG8Vf5nO2mn3N0ynaUh6mRh1H+yO9dJFFHDGkUYwiDAH9TT6K+nyzKKOXRfJrJ7t/p2RyYnFzxD10XYZKzpGzIu5hjA55yQO1FOJ+ZF55DNxjGBgYP5/p+ZXsHGI3BViSByvUAZYjBOfyH1p1BGRj/Dg9QeaRTkA4we49COCKAFrgfE+ryXd1JZQvi1tm2vtz+9mXhifYdB9Py7122q7YztUtj1wM15CzM7M7HLMxZj6knJr38koRnUlUl9nb5nmZjUcYqC6iUUUV9YeGT2d3PY3MF1Cf3kL7gD0YdCpx2I4rsWmAMGu6bzBLxdxD+Bzjer4/w68964etLSdWm0yZjt821m+W5gblXXpkA8ZrysxwX1mPND4l+K7f5HqZdjnhZ2lrF7o7fUXGp6JfGzy7SQ5CD74ZCrlCPXjH/6680ru4w8I/tPRZPOtJP9dDyWTHJV168fmPpyWjTvDOtSebiS2unOZI4nVN7dyAylT+AFfCYnDSb06HfmWWvEpV8O7o4fB546cn27Uleo2miaRZwTQR26us67ZjN87SL6Ent9MVSXw14cinRmQli2UhlmJQkdgp5P5muX6tI8j+yaulmihp1vMnhy3LIRuuWuORz5bZQNj3qGuy2Jt2bV2bdu3A27cYxjpis9dO0iSWQIQzIfnjSXO32YA5FfOZxkFbGVVWoNbJO/l1PtstxcMJRVGfQ52iuqnsbOdUV4wuwYQx/KVHpWLeXmg6KSRm5vF+5DvDFG9XIG0fln2rzYcH4yrWVOk00+v/A/4P3HbLOKMIOU9DSkvINJ02GW7bBSJVVON7yYyI1B71zVtIzNP4m1YfKp26dBnHmOMhAgPYdvxPblWhmuT/bHiOQxWqf8e1mMq8vcIqE5AP5nvgc1harqk+pzh2AjgiGy2gX7kSDgcDjPr/8AWr9NqVKeWUPq9J3nazfZdl+p8NjMY3Lnl6pfq/0Ktzcz3dxPczNulmcux9M9APYdBUNFFfO7nz7bbuwrqPCuryQXCadMxMFwSIM8+VL1wPZv5/WuXp8UjxSwyocPFIkiH0ZSGBq4ScJXRrQrOjUU0ev0UUjHAz9AOvUnA6A16x9oCnJc9s7Rg5Bx14+uR+FFCjaFXJOABknJOO5NFAC03GGOBw/J/wB4DH+fp706ggMCD0P+eKACvKtRs5LC9urZ1I8uRvLP96MnKsPqK9UUnGCcsuA3bPv/AJ/pWJ4h0YalbiWFR9st1Jj6Ayp1MZP8v/r162V4tYerae0v6Rw42g6sLx3R53RSkMpZWBDKSGBGCCOCCKSvtT54KKKKALVjqF7p0omtZSjdHU8o49HXoa6GPUtB1T/j6B0+9IH71Obd29Tjp+OPqa5SiuLE4GlidZKz7rc7MNja2Fd6bO/QeIbVEa3livrYjKMGEmR7HIb8iay79r26uhJJazRTMqJs2ucsOBsBGa5qC7vLY7re4miOc/upGXP1ANakfijxBGMG4STAwPMijJ/NQDXiTyarF3pyT/D/ADPeoZ9CL5p09fI7aePUDo8scZb7abLaCDh/M2YIDev9a4XSJNSsbx5oLG5nuFSSIIFlADNwfMVVyfpkfpXSf2hqI8L/ANpee32vzPM8whT/AMvnl424xjHGMVz0vijxBKCBcJGCMHyoowfzYE15ccwWA9ph5x5r/wDDHl4zEU3OM22na+i7mzIni/UI3a9uIdMsxy5LCLj/AICS/wCbCqH2vw7o/Nkh1G/A4uJxiCN/VF/w/wC+qwJ7m7uW3XE80zZzmV2fH03Goa8+tm1WceSmlCPZHm1MZd3gte71f+SLN7fXuoTGe6lZ3PCjoiD0RRwBVaiivHbvqzhlJyd3uFFFFAgq/o9k9/qFpAFJTzFknI/hiQgsSf0/GqSJJI6RxqzO7BEVQSzMTgAAV6RoOjppVrmQA3c4Vp2HO0dRGp9B3/zjajT55eR24LDOvU8lubFNGGbPZCQOmC3cj6dOvrSsT0BG49Pp3PQ9P89aUAAADOAMckk/iTXpn1oUUUUAFFFFACEHgjGR69CO4/z/APrAwYcfQg9QfQ0tGO4/Eevv/n/9QBzHiHw/9r331kg+0gZmiX/lsB/Eo/vfz+vXhiCCQQQQSCDwQR2Ir19SGGeR6g9QfQ1g614ct9R3XFsVhvOpJGI5vZwO/v8A5H0GXZp7NKlW26Pt/wAA8vF4Pn9+nv2PPqKmubW6s5WguYnilXqrDqPUHoRUNfVJqSujxWmnZhRRRTEFFFFAHalMeC8f9MQ/53W+uIr0SW1lXwsbfaTIunK5UddwAlIxXndflmZPmxEpLq3+Z0ZhFpw/woKKKK848wKKKKACnKruyoiszsQqqoJZieAABU1pZXl9MsFrE0kh5O37qjpuZjwBXf6L4etdMAml2zXpHMmPkjz2jB/n/LpWtOk5vyOzDYSeIemi7lfw94fFgq3l2oN46/IhwRbqe3+96/l9eiZguM9zgAdSfQUMwUZwT2AHUn0FAHc9f5ewNelGKgrI+po0Y0Y8kAUEZJ6nk45A9hS0UVRqFFFFABRRRQAUUUUAIVGQwyD0JHcehoDZODw2Mkc4/A0tBAIwRkcH8RzmgCte2FjqERiuoVkX+E9HQ+qMORXHaj4SvYN8lg32iLORG2FmUf8AoJ/T6V3GHXplx7kbh7A9D+J/GlDK3Q8jkggggZIyQea7cNjq2G+B6duhz1sNTrfEte55FJFNC7RyxvHIpwySKVYH3B5ptes3NnZXa7Lm3ilXGB5igkf7rdR+BrEm8IaNISYnuYf9lHV1/wDIgJ/WvoKOd0pL94mn955dTLpr4Hc4Gt3w/osuoXEdxMhFlC4Ziw4mZT/q19vX/wCvXS23hTRIGV3E1wQc4ncbMj/ZQD9c1uqiIqoiqqKAFVQAoA7ADisMZnMZQcKG76/5GlDANS5qn3C4HTt0rznX9Fl024eaJCbGZiY2AyImbny2x+n/ANavRqR0jkVkkRXRhhlcBlYehB4r5SpTVRWO3FYWOIhyvRrY8eor0O48J6HOzOgngJJOIHGzJ/2ZA36U2DwjokRBkNzP7SyBV/KMKf1rj+rzPD/suve2hwUMFxcSLFBFJLI3RI1LMfwFdNpvhC6l2S6i/kx9fJjIaYj0ZuVH6/hXZwW1paoEt4Iok44iRVzj1xUhIHX9ASeuOgreGGS1lqehRyuENajv+RBaWdnYxLDawpGg67R8zH1ZjyTU5bqBywB47duppPnOP4RkHAwSeBweMf5604ADgAAZJ49TyTXUlbY9ZJRVkIBjknJ5544B7CloooGFFFFABRRRQAUUUUAFFFFABRRRQAUhVWxkA4ORkZwfUUUUAAUjoxx8ow3OAPQ9fzJoBfjco5JHynIAxnJzj+X/ANYooAak0UjMqNll+8MEY5x3FPoooAKKKKAGNLEjKjNhm6DBOecdhTiX/hUHkA7mwMY6jAP+f1KKAAqT1Y4+YYXjIPv1/IigKq52gDJLHAxknqTRRQAtFFFABRRRQAUUUUAFFFFAH//Z",
  uuid: "xxx-xxx-xxx-xxx",
};
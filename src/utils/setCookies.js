
export async function setCookies(cookies) {

    return  {
        headers: {
            Cookie:
                `${cookies.get("accessToken")?.name}=${
                    cookies.get("accessToken")?.value
                }; ${cookies.get("refreshToken")?.name}=${
                    cookies.get("refreshToken")?.value
                }` || "-",
        },
    };

}
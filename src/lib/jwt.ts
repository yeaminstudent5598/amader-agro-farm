import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1d", // ১ দিন পর টোকেন এক্সপায়ার হবে
};

// ১. টোকেন তৈরি করা (Sign)
export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is not defined!");
  
  const token = jwt.sign(payload, secret, options);
  return token;
}

// ২. টোকেন চেক করা (Verify)
export function verifyJwt(token: string) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) throw new Error("NEXTAUTH_SECRET is not defined!");
    
    const decoded = jwt.verify(token, secret);
    return decoded as JwtPayload;
  } catch (error) {
    console.error(error);
    return null; // টোকেন ভুল বা এক্সপায়ার্ড হলে null রিটার্ন করবে
  }
}

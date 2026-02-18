import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { UserService } from "@/modules/user/user.service";

export const authOptions: AuthOptions = {
  // 1. Providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // 2. Secret & Session Strategy
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // ৩০ দিন
  },

  // 3. Callbacks (লজিক এখানে)
  callbacks: {
    // A. সাইন ইন করার সময়
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          // ডাটাবেসে ইউজার সেভ বা চেক করা
          const savedUser = await UserService.saveUserFromSocialLogin({
            name: user.name!,
            email: user.email!,
            image: user.image!,
            provider: "google",
            providerId: account.providerAccountId,
          });
          
          // ইউজারের রোল টেম্পোরারি অবজেক্টে সেট করা (পরের স্টেপের জন্য)
          // দ্রষ্টব্য: এখানে রিটার্ন true দিলে লগইন সফল হয়
          return true;
        } catch (error) {
          console.error("Error saving user", error);
          return false;
        }
      }
      return true;
    },

    // B. JWT তৈরি করার সময় (টোকেনে রোল ঢোকানো)
    async jwt({ token, user }) {
      // ইউজার যখন প্রথমবার লগইন করে, তখন 'user' অবজেক্টটা পাওয়া যায়
      if (user) {
        // ডাটাবেস থেকে লেটেস্ট রোল এবং আইডি আনা দরকার
        const dbUser = await UserService.getUserByEmail(user.email!);
        
        if (dbUser) {
          token.role = dbUser.role; // যেমন: "admin" বা "customer"
          token.id = dbUser._id.toString();
        }
      }
      return token;
    },

    // C. সেশন তৈরি করার সময় (ফ্রন্টেন্ডে রোল পাঠানোর জন্য)
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role; // টোকেন থেকে রোল নিয়ে সেশনে দিচ্ছি
        session.user.id = token.id;
      }
      return session;
    },
  },

  // 4. Custom Pages (লগইন পেজ চিনিয়ে দেওয়া)
  pages: {
    signIn: "/login",
    error: "/login", // এরর হলে আবার লগইনে পাঠাবে
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
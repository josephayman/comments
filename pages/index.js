import Head from "next/head";
import Image from "next/image";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button, Heading, Text, Icon, Box } from '@chakra-ui/react'
import { Logo, Github, Google } from '../styles/icons'


export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = session?.user.user_metadata;
  return (
    <div>

      <main>
        <Heading>
          Welcome to Comments
        </Heading>

        <Logo  />

        <Box as="main">
          {!session ? (
              <Button leftIcon={<Github />} onClick={() => supabase.auth.signInWithOAuth({ provider: "github" })}>Sign in with GitHub</Button>
          ) : (
            <>            
            <Text>Logged in as {user.email}</Text>
            <Button onClick={() => supabase.auth.signOut()}>Sign out</Button>
            </> 
          )}
        </Box>
      </main>

      <footer>
      </footer>
    </div>
  );
}
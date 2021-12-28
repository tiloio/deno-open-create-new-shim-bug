const handle = await Deno.open('./test-file', { createNew: true, write: true });
handle.close();